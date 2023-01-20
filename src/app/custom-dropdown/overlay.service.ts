import { Inject, Injectable, NgZone, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutsideClickService implements OnDestroy{
  private _document: Document;
  private _outsideClickerAttached: boolean = false;
  private _outsideClicked = new Subject<void>();

  constructor(@Inject(DOCUMENT) document: any, private _ngZone: NgZone) {
    this._document = document;
  }

  ngOnDestroy(): void {
    this._document.body.removeEventListener('pointerdown', this._clickListener, true);
    this._document.body.removeEventListener('click', this._clickListener, true);
    this._document.body.removeEventListener('auxclick', this._clickListener, true);
    this._document.body.removeEventListener('contextmenu', this._clickListener, true);
    this._outsideClickerAttached = false;
    this._outsideClicked.complete();
  }

  subscribeToOutsideClick() {
    this._ngZone.runOutsideAngular(() => this._addOutsideClickEventListeners());
    return this._outsideClicked.asObservable();
  }

  private _clickListener() {
    this._outsideClicked.next();
  }

  private _addOutsideClickEventListeners(): void {
    if (this._outsideClickerAttached)
      return;
    this._document.body.addEventListener('click', this._clickListener.bind(this), true);
    this._document.body.addEventListener('auxclick', this._clickListener.bind(this), true);
    this._document.body.addEventListener('contextmenu', this._clickListener.bind(this), true);
    this._outsideClickerAttached = true;
  }
}

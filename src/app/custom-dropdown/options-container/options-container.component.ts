import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OutsideClickService } from '../overlay.service';

@Component({
  selector: 'app-options-container',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.sass']
})
export class OptionsContainerComponent implements OnInit, OnDestroy {
  private $outsideClickedSub!: Subscription;
  @Output() onOutsideClick = new EventEmitter<void>();

  constructor(private outsideClick: OutsideClickService) { }

  ngOnDestroy(): void {
    console.log("destroyed");
    this.$outsideClickedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.$outsideClickedSub = this.outsideClick.subscribeToOutsideClick().subscribe({
      next: () =>{
        this.onOutsideClick.emit();
      }
    });
  }

}

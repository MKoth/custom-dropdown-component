import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutsideClickService } from '../overlay.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {

  @Input() value: string|null = null;
  @Input() placeholder: string = "Select an option";
  @Input() options: Array<string> = [];
  @Output() valueChange = new EventEmitter<string>();

  protected _displayDropdown:boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {}

  onOutsideClicked() {
    // had to wait for the next tick, otherwise option click event does not happening
    setTimeout(()=>{
      this._displayDropdown = false;
      // click on body is outside ngZone, so forcing change detection
      this.cdr.detectChanges();
    });
  }

  onOptionClicked(event:Event, option:string){
    event.stopPropagation();
    this._displayDropdown = false;
    this.valueChange.emit(option);
  }

  showDropdown(event:Event) {
    event.stopPropagation();
    if (this.options.length==0)
      return;
    this._displayDropdown = true;
    this.cdr.detectChanges();
  }

}

import { Component } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public customPlaceholder = "Choose some option";
  public options:Array<string> = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7"
  ];

  public value1 = this.options[2];

  public customPlaceholder2 = "Choose some option from scrolled list (custom placeholder)";

  public optionsWithScroll:Array<string> = [
    "Option With Scroll 1",
    "Option With Scroll 2",
    "Option With Scroll 3",
    "Option With Scroll 4",
    "Option With Scroll 5",
    "Option With Scroll 6",
    "Option With Scroll 7",
    "Option With Scroll 8",
    "Option With Scroll 9",
  ];

  public value2:string|null = null;

  randomOption() {
    this.value2 = this.optionsWithScroll[Math.floor(Math.random()*this.optionsWithScroll.length)];
  }
}

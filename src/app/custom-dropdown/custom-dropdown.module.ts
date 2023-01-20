import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { OptionsContainerComponent } from './options-container/options-container.component';
import { OptionComponent } from './options-container/option/option.component';



@NgModule({
  declarations: [
    SelectComponent,
    OptionsContainerComponent,
    OptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectComponent
  ]
})
export class CustomDropdownModule { }

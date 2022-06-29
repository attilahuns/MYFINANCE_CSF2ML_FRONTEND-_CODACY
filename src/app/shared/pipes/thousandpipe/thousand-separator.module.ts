import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandSeparatorPipe } from './thousand-separator.pipe';



@NgModule({
  declarations: [ThousandSeparatorPipe],
  exports: [ThousandSeparatorPipe],
  imports: [
    CommonModule
  ]
})
export class ThousandSeparatorModule { }

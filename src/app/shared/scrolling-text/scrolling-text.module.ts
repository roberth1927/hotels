import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingTextComponent } from './scrolling-text.component';



@NgModule({
  declarations: [
    ScrollingTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ScrollingTextComponent]
})
export class ScrollingTextModule { }

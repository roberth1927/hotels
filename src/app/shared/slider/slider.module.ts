import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    SliderComponent,

  ]
})
export class SliderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHotelComponent } from './form-hotel.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormHotelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormHotelComponent
  ]
})
export class FormHotelModule { }

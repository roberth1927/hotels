import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReservationComponent } from './form-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    FormReservationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [FormReservationComponent]
})
export class FormReservationModule { }

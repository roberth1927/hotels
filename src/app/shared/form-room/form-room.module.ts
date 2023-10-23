import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoomComponent } from './form-room.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormRoomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormRoomComponent
  ]
})
export class FormRoomModule { }

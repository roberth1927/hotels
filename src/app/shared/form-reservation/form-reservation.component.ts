import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.scss']
})
export class FormReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  @Output() formSubmitted = new EventEmitter<any>();


  constructor(
    private MatDialogRef: MatDialogRef<FormReservationComponent>,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.reservationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactPhone: ['', Validators.required],
      status: ['active'],
      contactName: ['', Validators.required],
      emergencyContactPhone: ['', Validators.required],
      hotelId: [''],
      roomId: [''],
      numberOfPeople: ['', [Validators.required, Validators.min(1)]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.reservationForm.valid) {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas realizar la reserva?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        this.formSubmitted.emit(this.reservationForm.value);
        Swal.fire('Guardado', 'Reserva realizada', 'success');
      } else {
      }

    } else {
      console.log('Formulario inválido');
    }
  }
 /*  cancel() {
    this.dialogRef.close();

  } */

}

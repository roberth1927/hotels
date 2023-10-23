import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hotel } from 'src/app/features/hotels/interfaces/HotelInterfaz';
import Swal from 'sweetalert2';
import { HotelService } from '../../features/hotels/services/hotel.service';

@Component({
  selector: 'app-form-room',
  templateUrl: './form-room.component.html',
  styleUrls: ['./form-room.component.scss'],
})
export class FormRoomComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();
  @Input() fetching = '';
  @Input() id: number | null = null;
  form!: FormGroup;
  hotels: Hotel[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormRoomComponent>,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private _hotelService: HotelService
  ) {}

  ngOnInit(): void {
    if (!this.form) {
      this.formInit();
    }
    this.getHotels();
  }

  getHotels() {
    this._hotelService.getHotels().subscribe((resp: any) => {
      this.hotels = resp.filter(
        (hotel: Hotel) => hotel.status === 'active'
      );
    });
  }

  formInit() {
    this.form = this.formBuilder.group({
      id: [''],
      hotelId: ['', [Validators.required]],
      roomNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      roomType: ['', Validators.required],
      baseCost: [
        null,
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      taxes: [
        null,
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      status: ['active', Validators.required],
      image: [''],
    });
    this.form.get('hotelId')?.valueChanges.subscribe((selectedHotelId) => {
      const selectedHotel = this.hotels.find(
        (hotel) => hotel.id === selectedHotelId
      );
      if (selectedHotel) {
        this.form
          .get('hotelId')
          ?.setValue(selectedHotel.id, { emitEvent: false });
      }
    });
    this.form.get('roomType')?.valueChanges.subscribe((roomType) => {
      this.form
        .get('image')
        ?.setValue(this.getImagePath(roomType), { emitEvent: false });
    });

    Swal.close();
  }
  getImagePath(roomType: string): string {
    switch (roomType) {
      case 'Individual':
        return '/assets/rooms/sencilla.jpg';
      case 'Doble':
        return '/assets/rooms/doble.jpg';
      case 'Suite':
        return '/assets/rooms/suite.jpg';
      default:
        return '';
    }
  }

  async onSubmit() {
    if (this.form.valid) {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas guardar el registro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        this.formSubmitted.emit(this.form.value);
        Swal.fire('Guardado', 'Registro guardado', 'success');
      } else {
      }
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 0.2);
    } else {
      console.log('Formulario inválido');
    }
  }

  cancel() {
    this.dialogRef.close();
    setTimeout(() => {
      this.cdr.detectChanges();
    });
  }
}

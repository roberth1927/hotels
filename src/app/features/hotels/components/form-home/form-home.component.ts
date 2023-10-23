import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormHotelComponent } from 'src/app/shared/form-hotel/form-hotel.component';
import { Hotel } from '../../interfaces/HotelInterfaz';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotelService } from '../../services/hotel.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.scss'],
})
export class FormHomeComponent implements OnInit {
  @ViewChild('hotelForm') hotelForm!: FormHotelComponent;

  hotelData!: Hotel;
  inputdata: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormHomeComponent>,
    public _hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.inputdata = this.data;
    this.hotelData = this.inputdata.hotelData;
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.hotelData) {
        this.editHotel();
      }
    });
  }

  editHotel(): void {
      this.hotelForm.form.patchValue({
        id: this.hotelData.id,
        name: this.hotelData.name,
        city: this.hotelData.city,
        location: this.hotelData.location,
        commission: this.hotelData.commission,
        status: this.hotelData.status,
      });
  }

  handleFormSubmit(form: any) {
    const { ...formData } = form;

    if (!formData.id) {
      this._hotelService.postHotel(formData).subscribe(
        (r) => {
          this.dialogRef.close();
        },
        (err) => {}
      );
    } else {
      const temporalHotel = { ...form };
      this._hotelService.putHotel(form.id, { ...temporalHotel }).subscribe(
        (r) => {
          this.dialogRef.close();
        },
        (err) => {}
      );
    }
    this._hotelService.getHotels().subscribe();
  }
}

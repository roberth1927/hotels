import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormReservationComponent } from 'src/app/shared/form-reservation/form-reservation.component';
import { Reservation } from '../../interfaces/ReservationInterfas';
import { ReservationService } from '../../services/reservation.service';
import { Room } from 'src/app/features/rooms/interfaces/RoomInterfas';

@Component({
  selector: 'app-reservation-home',
  templateUrl: './reservation-home.component.html',
  styleUrls: ['./reservation-home.component.scss'],
})
export class ReservationHomeComponent implements OnInit {
  @ViewChild('reservationForm') reservationForm!: FormReservationComponent;

  roomData!: Room;
  inputdata: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormReservationComponent>,
    public _reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.inputdata = this.data;
    this.roomData = this.inputdata.roomData;
    console.log(this.roomData);
  }

  handleFormSubmit(form: any) {
    const { hotelId, id } = this.roomData;
    const { ...formData } = form;
    formData.hotelId = hotelId;
    formData.roomId = id;

    if (!formData.id) {
      this._reservationService.postReservation(formData).subscribe(
        (r) => {
          this.updateRoomStatus(r.roomId, 'reserved');
          this.dialogRef.close();
        },
        (err) => {}
      );
    } else {
      const temporalHotel = { ...form };
      this._reservationService
        .putReservation(form.id, { ...temporalHotel })
        .subscribe(
          (r) => {
            this.dialogRef.close();
          },
          (err) => {}
        );
    }
  }
  updateRoomStatus(roomId: number, status: string) {
    this._reservationService.updateRoomStatus(roomId, status).subscribe(
      () => {},
      (error) => {}
    );
  }
}

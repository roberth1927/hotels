import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormRoomComponent } from 'src/app/shared/form-room/form-room.component';
import { Room } from '../../interfaces/RoomInterfas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.scss'],
})
export class FormHomeComponent implements OnInit {
  @ViewChild('roomForm') roomForm!: FormRoomComponent;

  roomData!: Room;
  inputdata: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormHomeComponent>,
    public _roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.inputdata = this.data;
    this.roomData = this.inputdata.roomData;
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.editRoom();
    });

  }

  editRoom(): void {
    if (this.roomData) {
      this.roomForm.form.patchValue({
        id: this.roomData.id,
        hotelId: this.roomData.hotelId,
        roomNumber: this.roomData.roomNumber,
        roomType: this.roomData.roomType,
        baseCost: this.roomData.baseCost,
        taxes: this.roomData.taxes,
        status: this.roomData.status,
        image: this.roomData.image,
      });
    }
  }

  handleFormSubmit(form: any) {
    const { ...formData } = form;

    if (!formData.id) {
      this._roomService.postRoom(formData).subscribe(
        (r) => {
          this.dialogRef.close();
        },
        (err) => {}
      );
    } else {
      const temporalHotel = { ...form };
      this._roomService.putRoom(form.id, { ...temporalHotel }).subscribe(
        (r) => {
          this.dialogRef.close();
        },
        (err) => {}
      );
    }


  }
}

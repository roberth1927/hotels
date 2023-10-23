import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Room } from 'src/app/features/rooms/interfaces/RoomInterfas';
import { ReservationHomeComponent } from '../reservation-home/reservation-home.component';

@Component({
  selector: 'app-card-reservation',
  templateUrl: './card-reservation.component.html',
  styleUrls: ['./card-reservation.component.scss'],
})
export class CardReservationComponent {
  @Input() room: any;

  constructor(public dialog: MatDialog) {}

  openDialog(room: Room): void {
    const dialogRef = this.dialog.open(ReservationHomeComponent, {
      width: '1500px',
      data: { title: 'Realizar Reserva', roomData: room },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.tablehotel.getHotels()
    });
  }
}

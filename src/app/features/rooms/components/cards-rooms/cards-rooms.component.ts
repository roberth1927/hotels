import { Component, Input } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { MatDialog } from '@angular/material/dialog';
import { FormHomeComponent } from '../form-home/form-home.component';
import { Room } from '../../interfaces/RoomInterfas';

@Component({
  selector: 'app-cards-rooms',
  templateUrl: './cards-rooms.component.html',
  styleUrls: ['./cards-rooms.component.scss']
})
export class CardsRoomsComponent {
  @Input() room: any;

  constructor(public _roomService: RoomService,public dialog: MatDialog) {}


  openDialog(room: Room): void {
    const dialogRef = this.dialog.open(FormHomeComponent, {
      width: '600px',
      data: { title: 'Editar Habitación', roomData: room },

    });

    dialogRef.afterClosed().subscribe((result) => {
     // this.tablehotel.getHotels()
    });
  }

}

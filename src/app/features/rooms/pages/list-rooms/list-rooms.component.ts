import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Fetching } from 'src/app/features/shared/types/FetcingType';
import { MatDialog } from '@angular/material/dialog';
import { FormHomeComponent } from '../../components/form-home/form-home.component';
import { imagesrooms } from '../../../hotels/dataset/dataset';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss'],
})
export class ListRoomsComponent implements OnInit {
  rooms: any[] = [];
  imagesrooms = imagesrooms;
  fetching: Fetching = 'iddle';
  constructor(public _roomService: RoomService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this._roomService.getFilteredRooms().subscribe((filteredRooms) => {
      this.rooms = filteredRooms;
    });
    this._roomService.getRooms().subscribe();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormHomeComponent, {
      width: '600px',
      data: { title: 'Crear Habitacion' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.tablehotel.getHotels()
    });
  }
}

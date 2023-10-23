import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss'],
})
export class ListRoomsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  rooms: any[] = [];

  pagination = { _limit: 5, _page: 1, length: 0 };
  private subscriptions: Subscription[] = [];

  constructor(
    public _reservationService: ReservationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(currentPage: any = null) {
    this._reservationService.getFilteredRooms().subscribe((filteredRooms) => {
      this.rooms = filteredRooms;
     // this.pagination.length = this.rooms.length;

    });
    const data: any = { ...this.pagination };
    data._page = currentPage ? currentPage.pageIndex + 1 : 1;
    const roomsSubscription = this._reservationService
      .getRooms(data)
      .subscribe((filter) => {
        const activeRoomsCountSubscription = this._reservationService
          .getActiveRoomsCount()
          .subscribe((lengthRooms) => {
            this.pagination.length = lengthRooms;
          });
        this.subscriptions.push(
          roomsSubscription,
          activeRoomsCountSubscription
        );
      });
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

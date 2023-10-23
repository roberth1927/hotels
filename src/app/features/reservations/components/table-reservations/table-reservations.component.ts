// table-reservations.component.ts
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Reservation } from 'src/app/users/reservation/interfaces/ReservationInterfas';
import { ReservationsService } from '../../services/reservations.service';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-table-reservations',
  templateUrl: './table-reservations.component.html',
  styleUrls: ['./table-reservations.component.scss'],
})
export class TableReservationsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  reservations: Reservation[] = [];

  constructor(private _reservationsService: ReservationsService) {}

  dataSource: Reservation[] = [];

  @Input() dataUsers: any = '';

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    this._reservationsService.getReservations().subscribe((resp: any) => {
      this.dataSource = resp;
    });
  }
}

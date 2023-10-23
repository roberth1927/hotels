import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/users/reservation/interfaces/ReservationInterfas';
import { ReservationsService } from '../../services/reservations.service';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss'],
})
export class ListReservationsComponent implements OnInit {


  ngOnInit(): void { }


}

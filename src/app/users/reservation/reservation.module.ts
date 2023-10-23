import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoomsComponent } from './pages/list-rooms/list-rooms.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FiltersComponent } from './components/filters/filters.component';
import { CardReservationComponent } from './components/card-reservation/card-reservation.component';
import { ReservationHomeComponent } from './components/reservation-home/reservation-home.component';
import { FormReservationModule } from 'src/app/shared/form-reservation/form-reservation.module';
import { NoDataModule } from 'src/app/shared/no-data/no-data.module';



@NgModule({
  declarations: [
    ListRoomsComponent,
    HeaderDashboardComponent,
    FiltersComponent,
    CardReservationComponent,
    ReservationHomeComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    MaterialModule,
    FormReservationModule,
    NoDataModule
  ]
})
export class ReservationModule { }

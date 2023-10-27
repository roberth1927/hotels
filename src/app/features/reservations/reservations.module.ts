import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListReservationsComponent } from './pages/list-reservations/list-reservations.component';
import { ReservationsRoutingModule } from './reservations-routing';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { TableReservationsComponent } from './components/table-reservations/table-reservations.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ScrollingTextModule } from 'src/app/shared/scrolling-text/scrolling-text.module';




@NgModule({
  declarations: [
    ListReservationsComponent,
    HeaderComponent,
    TableReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    MaterialModule,
    MatExpansionModule,
    ScrollingTextModule
  ]
})
export class ReservationsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { ListRoomsComponent } from './pages/list-rooms/list-rooms.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FiltersRoomsComponent } from './components/filters-rooms/filters-rooms.component';
import { CardsRoomsComponent } from './components/cards-rooms/cards-rooms.component';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { FormRoomModule } from 'src/app/shared/form-room/form-room.module';
import { NoDataModule } from 'src/app/shared/no-data/no-data.module';
import { SliderModule } from 'src/app/shared/slider/slider.module';



@NgModule({
  declarations: [
    ListRoomsComponent,
    FiltersRoomsComponent,
    CardsRoomsComponent,
    FormHomeComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    MaterialModule,
    FormRoomModule,
    NoDataModule,
    SliderModule
  ]
})
export class RoomsModule { }

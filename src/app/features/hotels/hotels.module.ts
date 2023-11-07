import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelsComponent } from './pages/list-hotels/list-hotels.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HotelsRoutingModule } from './hotels-routing.module';
import { TableHotelsComponent } from './components/table-hotels/table-hotels.component';
import { SharedModule } from '../shared/shared.module';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { FormHotelModule } from 'src/app/shared/form-hotel/form-hotel.module';
import { NoDataModule } from 'src/app/shared/no-data/no-data.module';
import { SliderModule } from 'src/app/shared/slider/slider.module';
import { LoadingDataModule } from 'src/app/shared/loading-data/loading-data.module';



@NgModule({
  declarations: [
    ListHotelsComponent,
    TableHotelsComponent,
    FormHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HotelsRoutingModule,
    SharedModule,
    FormHotelModule,
    NoDataModule,
    SliderModule,
    LoadingDataModule
  ]
})
export class HotelsModule { }

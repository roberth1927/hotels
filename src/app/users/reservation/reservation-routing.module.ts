import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ListRoomsComponent } from './pages/list-rooms/list-rooms.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListRoomsComponent

      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }

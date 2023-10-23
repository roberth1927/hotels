import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReservationsComponent } from './pages/list-reservations/list-reservations.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListReservationsComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReservationsRoutingModule { }

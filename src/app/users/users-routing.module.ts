import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'reservation',
        loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
      },
       {
        path: '**',
        redirectTo: 'reservation'
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

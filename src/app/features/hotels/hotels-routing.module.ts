import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHotelsComponent } from './pages/list-hotels/list-hotels.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListHotelsComponent
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

export class HotelsRoutingModule { }

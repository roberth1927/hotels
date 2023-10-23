import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerAuthComponent } from './banner-auth/banner-auth.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormLoginModule } from 'src/app/shared/form-login/form-login.module';



@NgModule({
  declarations: [
    BannerAuthComponent,
    FormAuthComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FormLoginModule

  ],
  exports: [
    BannerAuthComponent,
    FormAuthComponent
  ]
})
export class ComponentsModule { }

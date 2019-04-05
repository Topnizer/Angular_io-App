// Private Components Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { PrivateRoutingModule } from './private-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../angular-material/material.module';
import {FormsModule} from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent,
    BookingsComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class PrivateModule { }

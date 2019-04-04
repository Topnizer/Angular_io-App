// Private Components Routing Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
    {path: '', component: NavbarComponent, children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'bookings', component: BookingsComponent},
      {path: 'FAQ', component: FaqComponent},
      {path: '**', component: ProfileComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { 
   
 
}

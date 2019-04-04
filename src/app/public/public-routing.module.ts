//Routing Module for the Public Components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../public/login/login.component';
import { RegisterComponent } from '../public/register/register.component';
import { AuthGuard } from '../Guards/auth.guard';
import { LoggedInUserGuard } from '../Guards/loggedinuser.guard';


const routes: Routes = [

    {path: '', redirectTo: '/register', pathMatch: 'full'}, //By default redirect to Register Page
    { path: 'register', component: RegisterComponent, canActivate:[LoggedInUserGuard]},
    { path: 'login', component: LoginComponent, canActivate:[LoggedInUserGuard] },
    { path: 'nav', loadChildren: '../private/private.module#PrivateModule', canActivate:[AuthGuard]} , //Load the Private Module along with its components
    { path: '**', component: RegisterComponent} //Any undefined routes are redirected to Register page if not logged in
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

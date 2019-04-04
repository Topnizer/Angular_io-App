//Module for the public Components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../angular-material/material.module';
import { RegisterService } from './register/register.service';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent 
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [RegisterService],
})
export class PublicModule { }

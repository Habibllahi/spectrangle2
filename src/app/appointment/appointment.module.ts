import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AppointmentModule { }

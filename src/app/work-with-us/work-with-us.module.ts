import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkWithUsRoutingModule } from './work-with-us-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkWithUsComponent } from './work-with-us.component';


@NgModule({
  declarations: [
    WorkWithUsComponent
  ],
  imports: [
    CommonModule,
    WorkWithUsRoutingModule,
    SharedModule
  ]
})
export class WorkWithUsModule { }

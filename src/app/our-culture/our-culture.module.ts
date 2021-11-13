import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurCultureRoutingModule } from './our-culture-routing.module';
import { OurCultureComponent } from './our-culture.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OurCultureComponent
  ],
  imports: [
    CommonModule,
    OurCultureRoutingModule,
    SharedModule
  ]
})
export class OurCultureModule { }

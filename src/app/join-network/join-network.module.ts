import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinNetworkRoutingModule } from './join-network-routing.module';
import { JoinNewtworkComponent } from './join-newtwork.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    JoinNewtworkComponent
  ],
  imports: [
    CommonModule,
    JoinNetworkRoutingModule,
    SharedModule
  ]
})
export class JoinNetworkModule { }

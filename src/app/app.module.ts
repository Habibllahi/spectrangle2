import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { OurCultureModule } from './our-culture/our-culture.module';
import { JoinNetworkModule } from './join-network/join-network.module';
import { WorkWithUsModule } from './work-with-us/work-with-us.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AboutUsModule,
    OurCultureModule,
    JoinNetworkModule,
    WorkWithUsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { OurCultureModule } from './our-culture/our-culture.module';

import { SharedModule } from './shared/shared.module';
import { ApplicationModule } from './application/application.module';
import { AppointmentModule } from './appointment/appointment.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    OurCultureModule,
    AppRoutingModule,
    ApplicationModule,
    AppointmentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

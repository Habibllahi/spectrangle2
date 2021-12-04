import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Appointment } from '../types/Appointment';
import { AppointmentWrapper } from '../types/AppointmentWrapper';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private appointmentUrl: string = "https://spectrangles-website-server.herokuapp.com/api/appointment"
  private encodedCredentials: string = `Basic ${btoa("spectrangletechnologies@gmail.com"+":"+"efbb588c-9374-4995-aa3f-87d614acd7f0")}`;
  private httpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.httpHeaders = this.httpHeaders
    .set("Authorization",this.encodedCredentials)
    .set("Accept","application/json")
    .set("Content-Type","application/json");
  }

  public postAppointmentForm(appontment: Appointment){

    return this.http.post<Appointment>(this.appointmentUrl,appontment,{
      headers: this.httpHeaders
    }).pipe(map(value=>{
        return <AppointmentWrapper>{
          message: undefined,
          appointment: value
        }
      }),catchError((error: Error) => {
          return of(<AppointmentWrapper>{
            message: error.message,
            appointment : undefined
          });
      }));
  }
}

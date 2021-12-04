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
  constructor(private http: HttpClient) { }

  public postAppointmentForm(appontment: Appointment){
    const encodedCredentials: string = `Basic ${btoa("spectrangletechnologies@gmail.com"+":"+"efbb588c-9374-4995-aa3f-87d614acd7f0")}`;
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders
      .set("Authorization",encodedCredentials)
      .set("Accept","application/json")
      .set("Content-Type","application/json");
    return this.http.post<Appointment>(this.appointmentUrl,appontment,{
      headers: httpHeaders
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

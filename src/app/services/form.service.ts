import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Application } from '../types/Application';
import { DataWrapper } from '../types/DataWrapper';
import { Appointment } from '../types/Appointment';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private encodedCredentials: string = `Basic ${btoa("spectrangletechnologies@gmail.com"+":"+"efbb588c-9374-4995-aa3f-87d614acd7f0")}`;
  private httpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.httpHeaders = this.httpHeaders
    .set("Authorization",this.encodedCredentials)
    .set("Accept","application/json")
    .set("Content-Type","application/json");
  }

  public postForm(data: Appointment | Application, url:string){

    return this.http.post<Appointment | Application>(url, data, {
      headers: this.httpHeaders
    }).pipe(map(value=>{
        return <DataWrapper>{
          message: undefined,
          data: value
        }
      }),catchError((error: Error) => {
          return of(<DataWrapper>{
            message: error.message,
            data : undefined
          });
      }));
  }
}

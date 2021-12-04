import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormService } from '../services/form.service';
import { Appointment } from '../types/Appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit, OnDestroy {
  public appointment_image: String = "../assets/book_apointment_img.jpg"
  public message: string | undefined =  undefined;
  public appointmentFormSubscription!: Subscription
  public appointment: Appointment = {
    companyName: "",
    country: "",
    industry: "",
    jobDetails: "",
    phoneNumber:"",
    position:"",
    website:"",
    workAddress:'',
    workType:""
  }
  constructor(private formService: FormService) { }
  ngOnDestroy(): void {
    if(this.appointmentFormSubscription){
      this.appointmentFormSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {

  }

  public onSubmit(appointmentForm: NgForm): void{
    if(appointmentForm.form.valid){
      this.appointmentFormSubscription = this.formService.postAppointmentForm(this.appointment).subscribe(
        result => {
          if(result.message){
            this.message = result.message
          }else{
            this.message = "submission sucessful"
            this.appointment = {
              companyName: "",
              country: "",
              industry: "",
              jobDetails: "",
              phoneNumber:"",
              position:"",
              website:"",
              workAddress:'',
              workType:""
            }
          }
        }
      );
    }
  }

}

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
  public appointmentFormSubscription!: Subscription;

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
  public alert_success: boolean = false;
  public alert_warn: boolean = false;
  public spin: boolean = false;
  public form_invalid = false;
  private appointmentUrl: string = "https://spectrangles-website-server.herokuapp.com/api/appointment";
  constructor(private formService: FormService) { }
  ngOnDestroy(): void {
    if(this.appointmentFormSubscription){
      this.appointmentFormSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {

  }

  public onSubmit(appointmentForm: NgForm): void{
    this.spin = true;
    if(appointmentForm.form.valid){
      this.form_invalid = false;
      this.appointmentFormSubscription = this.formService.postForm(this.appointment, this.appointmentUrl).subscribe(
        result => {
          if(result.message){
            this.message = result.message;
            this.alert_warn = true;
            this.alert_success = false;
            this.spin = false;
          }else{
            this.alert_success = true;
            this.alert_warn = false;
            this.spin = false;
            this.message = "submission sucessful";
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
    }else{
      this.alert_success = false;
      this.alert_warn = false;
      this.spin = false;
      this.form_invalid = true;
    }
  }

  public clearAlert(): void{
    this.alert_success = false;
    this.alert_warn = false;
  }

}

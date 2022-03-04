import { Component, OnDestroy, OnInit } from '@angular/core';
import { Application } from '../types/Application';
import { EmploymentStatus } from '../types/EmploymentStatus';
import { Gender } from '../types/Gender';
import { proficiency } from '../types/Proficiency';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit, OnDestroy {
  public application_image: String = "../assets/book_apointment_img.jpg"
  public join_us_content: string = `Spectrangle hires and manages the best remote talents
  for leading companies globally. We are currently accepting applications for Fullstack
  developers, Frontend developers, Backend developers and UI/UX designers.`;

  public what_to_expect: string[] = [
    `Drills testing your communication reason and technical skills`,
    `if accepted you will receive private job opportunities from local and global companies
     with premium packages.`
  ]


  public application: Application = {
    additionalInformation: "",
    city: "",
    country: "",
    currentJob: "",
    currentOrganization: "",
    email: "",
    employmentStatus:EmploymentStatus[0].toString(),
    firstName:"",
    gender: Gender[0].toString(),
    githubUrl: "",
    lastName: "",
    linkedProfile: "",
    otherSkills: [],
    phoneNumber:"",
    portfolioUrl:"",
    preferredWorkType:"",
    proficiency: proficiency[0].toString(),
    salaryExpectation:0,
    totalYearOfExperience:0,
    twitterUrl:""
  }
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  public message: string | undefined =  undefined;

  public alert_success: boolean = false;
  public alert_warn: boolean = false;
  public spin: boolean = false;
  public form_invalid = false;

  private applicationUrl: string = "https://spectrangles-website-server.herokuapp.com/api/application"

  public applicationFormSubscription!: Subscription;
  constructor(private formService: FormService) { }
  ngOnDestroy(): void {
    if(this.applicationFormSubscription){
      this.applicationFormSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
  }
  addChip(event: MatChipInputEvent): void {
    const skill = (event.value || '').trim();

    // Add our skill
    if (skill) {
      this.application.otherSkills.push(skill);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeChip(skill: string): void {
    const index = this.application.otherSkills.indexOf(skill);

    if (index >= 0) {
      this.application.otherSkills.splice(index, 1);
    }
  }


  public onSubmit(applicationForm: NgForm): void{
    this.spin = true;
    if(applicationForm.form.valid){
      this.form_invalid = false;
      this.applicationFormSubscription = this.formService.postForm(this.application,this.applicationUrl).subscribe(
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
            this.application = {
              additionalInformation: "",
              city: "",
              country: "",
              currentJob: "",
              currentOrganization: "",
              email: "",
              employmentStatus:EmploymentStatus[0].toString(),
              firstName:"",
              gender: Gender[0].toString(),
              githubUrl: "",
              lastName: "",
              linkedProfile: "",
              otherSkills: [],
              phoneNumber:"",
              portfolioUrl:"",
              preferredWorkType:"",
              proficiency: proficiency[0].toString(),
              salaryExpectation:0,
              totalYearOfExperience:0,
              twitterUrl:""
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
}

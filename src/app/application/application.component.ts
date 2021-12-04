import { Component, OnInit } from '@angular/core';
import { Application } from '../types/Application';
import { EmploymentStatus } from '../types/EmploymentStatus';
import { Gender } from '../types/Gender';
import { proficiency } from '../types/Proficiency';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  public application_image: String = "../assets/book_apointment_img.jpg"
  public join_us_content: string = `Spectrangles hire and manages best talents for in-house projects
  and external companies globally.we are currently accepting application for Fullstack developer,
  Frontend developer, Backend developer, Dev Ops engineers, UI/UX designer, Cybersecurity engineers,
  Graphics designer data scientist, content developer and digital marketer.`;

  public what_to_expect: string[] = [
    `Drills testing your communication reason and technical skills`,
    `if accepted you will get proper package and more job experiences`
  ]



  public application: Application = {
    additionalInformation: "",
    city: "",
    country: "",
    currentJob: "",
    currentOrganization: "",
    email: "",
    employmentStatus:EmploymentStatus.UNEMPLOYED,
    firstName:"",
    gender: Gender.FEMALE,
    githubUrl: "",
    lastName: "",
    linkedProfile: "",
    otherSkills: [],
    phoneNumber:"",
    portfolioUrl:"",
    preferredWorkType:"",
    proficiency: proficiency.BEGINNER,
    salaryExpectation:0,
    totalYearOfExperience:0,
    twitterUrl:""
  }
  constructor() { }

  ngOnInit(): void {
  }

}

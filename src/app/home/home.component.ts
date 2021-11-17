import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Testimonial } from '../types/Testimonial';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private screenSub!: Subscription;
  public imageSrc!: string;
  public contentHeader = 'We turn your idea into a project';
  public contentBody: string = "We schedule a meeting session with you, here you share your product idea with us,We then turn your product idea into something that can be shipped.";
  public card_1_title: string = "Measurable Growth";
  public card_2_title: string = "World Class Engineer";
  public card_3_title: string = "Scalable Project";
  public card_4_title: string = "Diverse Team";
  public card_1_body: string = "One investment in the Spectrangle team would depict an exponential growth in your company ";
  public card_2_body: string = "Engineers at Spectrangle are technology leaders and expert in their fields";
  public card_3_body: string = "The team at Spectrangle build scalable and trend following products for clients";
  public card_4_body: string = "Design thinking and agile principles are at the core of how our teams operate";
  public testimonials: Testimonial[] = [
    {
      imageSrc: '../assets/1.jpg',
      quote: 'We at Spectrangle hire and manage the best talents for in-house projects and external companies globally, thereby creating, building, and strengthing your project and products with the best team available.',
      selected:false,
      name:'John Doe',
      title: 'CEO Opened Gate',
      id: 1
    },
    {
      imageSrc: '../assets/2.jpg',
      quote: 'I at Spectrangle hire and manage the best talents for in-house projects and external companies globally, thereby creating, building, and strengthing your project and products with the best team available.',
      selected:false,
      name:'John Doe',
      title: 'CEO Opened Gate',
      id: 2
    },
    {
      imageSrc: '../assets/3.jpg',
      quote: 'you at Spectrangle hire and manage the best talents for in-house projects and external companies globally, thereby creating, building, and strengthing your project and products with the best team available.',
      selected:false,
      name:'John Doe',
      title: 'CEO Opened Gate',
      id: 3
    },
    {
      imageSrc: '../assets/4.jpg',
      quote: 'None at Spectrangle hire and manage the best talents for in-house projects and external companies globally, thereby creating, building, and strengthing your project and products with the best team available.',
      selected:false,
      name:'John Doe',
      title: 'CEO Opened Gate',
      id: 4
    },
    {
      imageSrc: '../assets/3.jpg',
      quote: 'you at Spectrangle hire and manage the best talents for in-house projects and external companies globally, thereby creating, building, and strengthing your project and products with the best team available.',
      selected:false,
      name:'John Doe',
      title: 'CEO Opened Gate',
      id: 5
    },
    {
      imageSrc: '../assets/4.jpg',
      quote: 'None at Spectrangle hire and manage the best talents for in-house projects and external companies globally, thereby creating, building, and strengthing your project and products with the best team available.',
      selected:false,
      name:'John Doe',
      title: 'CEO Opened Gate',
      id: 6
    }
  ]

  public testimonial_: Testimonial =  this.testimonials[0]

  constructor(private screen: BreakpointObserver) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.testimonial_.selected = true;
    this.watchScreen();
  }

  public onMouseEnterTestimonial(testimonial: Testimonial){
    this.testimonials = this.testimonials.map((value: Testimonial) => {
      if(value.id === testimonial.id){
        value.selected = true;
        this.testimonial_ = value;
      }else{
        value.selected = false
      }
      return value;
    })
  }

  public resetTestimoniallToDefault(){
    this.testimonial_ = this.testimonials[0];
    this.testimonial_.selected = true;
  }
  public watchScreen(){
    this.screenSub = this.screen.observe([Breakpoints.XSmall,Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(
      screen => {

        if(screen.breakpoints[Breakpoints.XSmall]){
          this.imageSrc = "../assets/dev_small_screen.jpg";
        }
        if(screen.breakpoints[Breakpoints.Small]){
         this.imageSrc = "../assets/dev_small_screen.jpg";
       }
        if(screen.breakpoints[Breakpoints.Medium]){
         this.imageSrc = "../assets/dev_medium_screen.jpg";
       }
       if(screen.breakpoints[Breakpoints.Large]){
         this.imageSrc = "../assets/dev_large_screen.jpg";
       }
       if(screen.breakpoints[Breakpoints.XLarge]){
         this.imageSrc = "../assets/dev_large_screen.jpg";
       }
      }
    );
  }
}

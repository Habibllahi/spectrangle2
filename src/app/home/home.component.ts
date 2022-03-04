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
      imageSrc: '../assets/1.png',
      quote: 'Techprenuer, investor and problem solver.',
      selected:false,
      name:'Olatunji Segun',
      title: 'Co-Founder & CEO',
      id: 1
    },
    {
      imageSrc: '../assets/2.png',
      quote: 'Professing technology, arts and creativity.' +
      'Bringing exquisite innovations to the world of Arts, science and the general philosophy of the world itself' +
      'A techist, creator, and media expert...managing, making more corporate and digitalising the existence of corporations/organisations/individual brands.',
      selected:false,
      name:'Bewaji Emmanuel',
      title: 'Co-Founder & COO',
      id: 2
    },
    {
      imageSrc: '../assets/3.png',
      quote: 'Excellent UI/UX designer, bright in graphics with excellent coomunication skills ',
      selected:false,
      name:'Stephen Onyekachi',
      title: 'Communication officer & UI/UX designer',
      id: 3
    },
    {
      imageSrc: '../assets/4.jpg',
      quote: 'Fullstack web developer and 3D animation enthusiast. Love coding',
      selected:false,
      name:'Hamzat Habibllahi',
      title: 'Lead Developer',
      id: 4
    }
  ]
  public why_work_with_us: string = 'We at Spectrangle hire and manage the best talents for in-house projects and external companies globally, thereby' +
  'creating, building, and strengthing your project and products with the best team available.';
  public have_you_part1 : string = 'Have an idea you want to ';
  public have_you_part2: string = 'change in to project';
  public book_appointment: string = 'Book Appointment';

  public testimonial_: Testimonial =  this.testimonials[0]
  public book_apointment_img = "../assets/book_apointment_img.jpg"

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

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private screenSub!: Subscription;
  public imageSrc: string = '';
  public contentHeader = 'We turn your idea into a project'
  public contentBody: string = "We schedule a meeting session with you, here you share your product idea with us,We then turn your product idea into something that can be shipped."
  constructor(private screen: BreakpointObserver) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.watchScreen();
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

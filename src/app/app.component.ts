import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit{
  public title = 'spectrangle';
  public screenSize = 'small';
  public navState = 'close';
  public bannerSrc = "";
  public headline = " We at Spectrangle are team of developers driven by creativity and on time delivery. Turn your project brief into an MVP in a meeting session.";
  public headlineButton = 'Tell us about your project'
  public routes = [
    {
      link:'Home',
      fragment: '/home'
    },
    {
      link:'About us',
      fragment: '/about-us'
    },
    {
      link:'Our culture',
      fragment: '/our-culture'
    },
    {
      link:'Join us',
      fragment: '/join-network'
    }
  ]

  screenSub!: Subscription;

  constructor(private screen: BreakpointObserver, private elementRef: ElementRef){

  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    this.screenSub.unsubscribe();
  }
  ngOnInit(): void {
    this.listenToSreenSize();
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll() {
    let element = this.elementRef.nativeElement.querySelector('.header-nav') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('on-scroll');
    } else {
      element.classList.remove('on-scroll');
    }
  }

  public toggleNav(){
    this.navState === 'open'? this.navState = 'close': this.navState = 'open';
  }

  public closeNav(){
    if(this.navState === 'open'){
      this.navState = 'close'
    }
  }

  public listenToSreenSize(){
    this.screenSub = this.screen.observe([Breakpoints.XSmall,Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(
       screen => {

         if(screen.breakpoints[Breakpoints.XSmall]){
           this.screenSize = 'small';
           this.bannerSrc = "../assets/banner_small_screen.png";
         }
         if(screen.breakpoints[Breakpoints.Small]){
          this.screenSize = 'small';
          this.bannerSrc = "../assets/banner_medium_screen.png";
        }
         if(screen.breakpoints[Breakpoints.Medium]){
          this.screenSize = 'medium';
          this.bannerSrc = "../assets/banner_medium_screen.png";
        }
        if(screen.breakpoints[Breakpoints.Large]){
          this.screenSize = 'large';
          this.bannerSrc = "../assets/banner_large_screen.png";
        }
        if(screen.breakpoints[Breakpoints.XLarge]){
          this.screenSize = 'large';
          this.bannerSrc = "../assets/banner_large_screen.png";
        }
       }
    );
  }
}
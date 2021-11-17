import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  @Input()
  public cardIcon!: string;

  @Input()
  public cardTitle!: string;

  @Input()
  public cardBody!: string;


  public hasDarkFontColor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onMouseEnterCard(){
    this.hasDarkFontColor = true;
  }

  public onMouseLeaveCard(){
    this.hasDarkFontColor = false;
  }

}

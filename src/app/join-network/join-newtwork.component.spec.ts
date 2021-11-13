import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinNewtworkComponent } from './join-newtwork.component';

describe('JoinNewtworkComponent', () => {
  let component: JoinNewtworkComponent;
  let fixture: ComponentFixture<JoinNewtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinNewtworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinNewtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

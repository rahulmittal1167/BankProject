import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloComponent } from './homelo.component';

describe('HomeloComponent', () => {
  let component: HomeloComponent;
  let fixture: ComponentFixture<HomeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

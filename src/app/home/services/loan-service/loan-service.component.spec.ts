import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanServiceComponent } from './loan-service.component';

describe('LoanServiceComponent', () => {
  let component: LoanServiceComponent;
  let fixture: ComponentFixture<LoanServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

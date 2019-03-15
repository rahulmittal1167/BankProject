import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduloComponent } from './edulo.component';

describe('EduloComponent', () => {
  let component: EduloComponent;
  let fixture: ComponentFixture<EduloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

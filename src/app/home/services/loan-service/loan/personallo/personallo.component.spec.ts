import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalloComponent } from './personallo.component';

describe('PersonalloComponent', () => {
  let component: PersonalloComponent;
  let fixture: ComponentFixture<PersonalloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

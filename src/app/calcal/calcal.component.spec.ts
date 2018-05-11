import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcalComponent } from './calcal.component';

describe('CalcalComponent', () => {
  let component: CalcalComponent;
  let fixture: ComponentFixture<CalcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

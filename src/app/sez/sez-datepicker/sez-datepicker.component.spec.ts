import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SezDatepickerComponent } from './sez-datepicker.component';

describe('SezDatepickerComponent', () => {
  let component: SezDatepickerComponent;
  let fixture: ComponentFixture<SezDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SezDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SezDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

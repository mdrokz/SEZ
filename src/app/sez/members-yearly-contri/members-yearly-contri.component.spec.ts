import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersYearlyContriComponent } from './members-yearly-contri.component';

describe('MembersYearlyContriComponent', () => {
  let component: MembersYearlyContriComponent;
  let fixture: ComponentFixture<MembersYearlyContriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersYearlyContriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersYearlyContriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

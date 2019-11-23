import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsharaContriComponent } from './ashara-contri.component';

describe('AsharaMubarakaComponent', () => {
  let component: AsharaContriComponent;
  let fixture: ComponentFixture<AsharaContriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsharaContriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsharaContriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DareesComponent } from './darees.component';

describe('DareesComponent', () => {
  let component: DareesComponent;
  let fixture: ComponentFixture<DareesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DareesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DareesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

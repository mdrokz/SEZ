import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DareesMenuComponent } from './darees-menu.component';

describe('DareesMenuComponent', () => {
  let component: DareesMenuComponent;
  let fixture: ComponentFixture<DareesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DareesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DareesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

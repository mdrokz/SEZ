import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsharaMubarakaComponent } from './ashara-mubaraka.component';

describe('AsharaMubarakaComponent', () => {
  let component: AsharaMubarakaComponent;
  let fixture: ComponentFixture<AsharaMubarakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsharaMubarakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsharaMubarakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

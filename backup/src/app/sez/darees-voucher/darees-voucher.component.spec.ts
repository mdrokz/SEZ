import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DareesVoucherComponent } from './darees-voucher.component';

describe('DareesVoucherComponent', () => {
  let component: DareesVoucherComponent;
  let fixture: ComponentFixture<DareesVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DareesVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DareesVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

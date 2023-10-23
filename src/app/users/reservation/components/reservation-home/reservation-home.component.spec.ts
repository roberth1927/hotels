import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHomeComponent } from './reservation-home.component';

describe('ReservationHomeComponent', () => {
  let component: ReservationHomeComponent;
  let fixture: ComponentFixture<ReservationHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationHomeComponent]
    });
    fixture = TestBed.createComponent(ReservationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRoomsComponent } from './cards-rooms.component';

describe('CardsRoomsComponent', () => {
  let component: CardsRoomsComponent;
  let fixture: ComponentFixture<CardsRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsRoomsComponent]
    });
    fixture = TestBed.createComponent(CardsRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

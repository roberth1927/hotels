import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersRoomsComponent } from './filters-rooms.component';

describe('FiltersRoomsComponent', () => {
  let component: FiltersRoomsComponent;
  let fixture: ComponentFixture<FiltersRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersRoomsComponent]
    });
    fixture = TestBed.createComponent(FiltersRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

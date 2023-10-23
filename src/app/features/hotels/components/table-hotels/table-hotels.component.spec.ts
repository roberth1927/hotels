import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHotelsComponent } from './table-hotels.component';

describe('TableHotelsComponent', () => {
  let component: TableHotelsComponent;
  let fixture: ComponentFixture<TableHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableHotelsComponent]
    });
    fixture = TestBed.createComponent(TableHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

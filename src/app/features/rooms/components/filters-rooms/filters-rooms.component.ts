import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/features/hotels/interfaces/HotelInterfaz';
import { HotelService } from 'src/app/features/hotels/services/hotel.service';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-filters-rooms',
  templateUrl: './filters-rooms.component.html',
  styleUrls: ['./filters-rooms.component.scss'],
})
export class FiltersRoomsComponent implements OnInit {
  constructor(
    private _hotelService: HotelService,
    private _roomService: RoomService
  ) {}

  hotels: Hotel[] = [];
  activeFilter = false;
  reservedFilter = false;
  disabledFilter = false;
  selectedHotelId: any;

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this._hotelService.getHotels().subscribe((resp: any) => {
      this.hotels = resp;
    });
  }

  onHotelSelectionChange(selectedHotelId: any): void {
    this.selectedHotelId = selectedHotelId;
    this.applyFilters();
  }

  onStatusCheckboxChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    const filters: any = {
      status: [],
    };

    if (this.selectedHotelId) {
      filters.hotelId = this.selectedHotelId;
    }

    if (this.activeFilter) {
      filters.status.push('active');
    }
    if (this.reservedFilter) {
      filters.status.push('reserved');
    }
    if (this.disabledFilter) {
      filters.status.push('disabled');
    }
    this._roomService.setFilter(filters);
  }
}

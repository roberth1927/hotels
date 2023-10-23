import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Hotel } from 'src/app/features/hotels/interfaces/HotelInterfaz';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  hotels: Hotel[] = [];
  ciudades: string[] = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Cartagena',
    'Santa Marta',
    'Pereira',
    'Bucaramanga',
    'Cúcuta',
    'Manizales',
  ];

  constructor(private _reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this._reservationService.getFilteredHotels().subscribe((filteredHotels) => {
      this.hotels = filteredHotels;
    });
    this._reservationService.getHotels().subscribe()
  }

  onCitySelectionChange(selected: string): void {
    const params = {
      status: 'active',
      city: selected
    };
    this._reservationService.getHotels(params).subscribe()
  }

  onHotelSelectionChange(selected: string): void {
    this._reservationService.setFilter(selected)
  }

}

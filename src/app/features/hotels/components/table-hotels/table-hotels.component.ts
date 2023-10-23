import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SwalService } from 'src/app/features/shared/services/swal.service';
import { HotelService } from '../../services/hotel.service';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from '../../interfaces/HotelInterfaz';
import { Fetching } from 'src/app/features/shared/types/FetcingType';
import { MatDialog } from '@angular/material/dialog';
import { FormHomeComponent } from '../form-home/form-home.component';

@Component({
  selector: 'app-table-hotels',
  templateUrl: './table-hotels.component.html',
  styleUrls: ['./table-hotels.component.scss'],
})
export class TableHotelsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input('status') status!: string;
  fetching: Fetching = 'iddle';
  pagination = { _limit: 10, _page: 1, length: 0 };

  displayedColumns: string[] = ['name', 'city', 'location', 'commission', 'status'];
  dataSource!: MatTableDataSource<Hotel>;

  constructor(
    private _hotelService: HotelService,
    public dialog: MatDialog,
    private _swal: SwalService
  ) {}

  ngOnInit(): void {
    this.status == 'active' || this.status == 'disabled'
      ? this.displayedColumns.push('action')
      : null;
    this.getHotels();
  }

  getHotels(currentPage: any = null) {
    this.fetching = 'pending';

    const data: any = { ...this.pagination };
    data._page = currentPage ? currentPage.pageIndex + 1 : 1;
    this.status != 'all' ? (data.status = this.status) : null;

    this._hotelService.getHotels(data).subscribe(
      (resp: any) => {
        this.fetching = 'succeded';
        this._hotelService.getHotelsCount().subscribe((lengthH) => {
          this.pagination.length = lengthH
        })
        const data = resp ? resp : [];
        this.dataSource = new MatTableDataSource(data);
      },
      (err) => (this.fetching = 'rejected')
    );
  }

  activedDisabledHotel(hotel: Hotel) {
    const newStatus = hotel.status === 'disabled' ? 'active' : 'disabled';

    this._swal
      .show({
        icon: 'question',
        title: '¿Está seguro?',
        text: `Confirma que desea ${
          newStatus === 'active' ? 'activar' : 'desactivar'
        } el hotel ${hotel.status}`,
        showCancel: true,
      })
      .then((r) => {
        if (r.isConfirmed) {
          const updatedHotel = { ...hotel, status: newStatus };

          this._hotelService
            .putHotel(hotel.id, updatedHotel)
            .subscribe((res) => {
              this._swal.show({
                icon: 'success',
                title: 'Felicidades',
                text: `Se ha ${
                  newStatus === 'active' ? 'activado' : 'desactivado'
                } con éxito`,
                showCancel: false,
              });
              this.getHotels();
            });
        }
      });
  }

  openDialog(element: Hotel): void {
    const dialogRef = this.dialog.open(FormHomeComponent, {
      width: '500px',
      data: { title: 'Editar Hotel', hotelData: element },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getHotels();
    });
  }
}

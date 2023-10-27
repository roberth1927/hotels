import { Component, OnInit, ViewChild } from '@angular/core';
import { titlenav, imageshotels } from '../../dataset/dataset';
import { MatDialog } from '@angular/material/dialog';
import { FormHomeComponent } from '../../components/form-home/form-home.component';
import { TableHotelsComponent } from '../../components/table-hotels/table-hotels.component';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.scss'],
})
export class ListHotelsComponent implements OnInit {
  @ViewChild('tablehotel') tablehotel!: TableHotelsComponent;

  titlenav = titlenav;
  imageshotels = imageshotels;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormHomeComponent, {
      width: '600px',
      data: { title: 'Crear Hotel' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.tablehotel.getHotels();
    });
  }
}

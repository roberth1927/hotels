import { Component } from '@angular/core';
import { SidenavService } from 'src/app/features/shared/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _sidenav: SidenavService) { }

  toggle() {
    this._sidenav.toggle()
  }

}

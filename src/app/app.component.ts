import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { BusketService } from './core/services/busket/busket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-store';

  public authState: Boolean;
  public busketTotal: number;

  constructor(public authService: AuthService, public busketService: BusketService) {
    this.authService.user.subscribe(user => {
      if (user) {
          this.authState = true;
      } else {
        this.authState = false;
      }
    });
  }

  public ngOnInit() {
    this.busketTotal = this.busketService.getTotalPrice();
  }

  public doLogout(logout): void {
    this.authService.logout();
  }

}

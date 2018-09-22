import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public authState: Boolean;

  @Input()
  public busketTotal: number;

  @Output()
  public logout: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  public ngOnInit() {
  }

  public doLogout(logout) {
    this.logout.emit(logout);
  }

}

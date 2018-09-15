import { Component, Input, OnInit } from '@angular/core';
import { ICard } from './interfaces/card.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-store';

  constructor() {
  }

  ngOnInit() {
  }

}

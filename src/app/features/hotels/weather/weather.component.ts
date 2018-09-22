import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../../interfaces/hotels.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}

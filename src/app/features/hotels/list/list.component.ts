import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Hotel } from '../../../interfaces/hotels.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public hotels: Hotel[];
  @Input()
  public selectedHotel: Hotel;
  @Output()
  public hotel: EventEmitter<Hotel> = new EventEmitter();

  public constructor() { }

  public ngOnInit(): void {
  }

  public selectHotel(hotel: Hotel): void {
    this.hotel.emit(hotel);
  }

}

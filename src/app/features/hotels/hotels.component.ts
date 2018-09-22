import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotels.interface';
import { Observable } from 'rxjs';
import { HotelsService } from '../../core/services/hotels/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public selectedHotel: Hotel;
  public hotels: Hotel[];

  public constructor(private hotelsService: HotelsService) {
  }

  public ngOnInit(): void {
    this.hotelsService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
      this.selectedHotel = hotels[0];
    });
  }

  public selectHotel(hotel: Hotel): void {
    this.hotelsService.getById(hotel.id).subscribe(h => {
      this.selectedHotel = h;
    });
  }

}

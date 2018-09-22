import { Injectable } from '@angular/core';
import { ICard } from '../../../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class BusketService {

  public busket: any;

  constructor() {
    this.busket = JSON.parse(sessionStorage.getItem('busket'));
    this.busket = this.busket ? this.busket : [];
  }

  public addToBusket(card: ICard) {
    if (this.busket.filter(el => el.id === card.id).length > 0) {
      this.busket.forEach(function(k, v, arr) {
        if (k.id === card.id) {
            k.price = k.price + card.price;
        }
      });
    } else {
      this.busket.push({
        id: card.id,
        price: card.price
      });
    }
    sessionStorage.setItem('busket', JSON.stringify(this.busket));
  }

  public getTotalPrice() {
    let total = 0;
    this.busket.forEach(function(k, v, arr) {
      total = total + k.price;
    });
    console.log(total);
    return total;
  }

}

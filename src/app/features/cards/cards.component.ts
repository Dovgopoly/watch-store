import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { CardService } from '../../core/services/card/card.service';
import { BusketService } from '../../core/services/busket/busket.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cards: ICard[];

  @Output()
  public price: EventEmitter<any> = new EventEmitter();

  constructor(private cardService: CardService, private busketService: BusketService) {
  }

  public ngOnInit() {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
    });
  }

  public addToBusket(card) {
    this.busketService.addToBusket(card);
  }

}

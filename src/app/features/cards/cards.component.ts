import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { Observable } from 'rxjs';
import { CardService } from '../../core/services/card/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cards: ICard[];

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
    });
  }

}

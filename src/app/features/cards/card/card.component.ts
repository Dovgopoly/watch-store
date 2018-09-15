import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../../interfaces/card.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from '../../../core/services/card/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public card;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.card = this.cardService.getById(id);
    this.card.subscribe(value => {
      this.card = value;
    });
  }

  ngOnInit() {
  }

}

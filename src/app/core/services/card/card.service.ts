import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ICard } from '../../../interfaces/card.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public cardsCollection: AngularFirestoreCollection<ICard>;
  public cards: Observable<ICard[]>;

  public card$: Observable<ICard>;

  constructor(public afs: AngularFirestore) {
      // this.cards = this.afs.collection('products').valueChanges();
      this.cardsCollection = this.afs.collection('products', ref => ref.orderBy('title', 'asc'));

      this.cards = this.cardsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as ICard;
          data.id = a.payload.doc.id;
          return data;
        }))
      );
  }

  getCards() {
    return this.cards;
  }

  getById(id) {
    return this.afs.collection('products').doc(id).snapshotChanges().pipe(
      map(a => {
        const data = a.payload.data() as ICard;
        data.id = a.payload.id;
        return data;
      })
    );
  }

}

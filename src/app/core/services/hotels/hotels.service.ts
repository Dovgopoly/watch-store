import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Hotel } from '../../../interfaces/hotels.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  public hotelsCollection: AngularFirestoreCollection<Hotel>;
  public hotels$: Observable<Hotel[]>;
  public hotel$: Observable<Hotel>;

  constructor(public afs: AngularFirestore) {
      this.hotelsCollection = this.afs.collection('hotels');
      this.hotels$ = this.hotelsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Hotel;
          data.id = a.payload.doc.id;
          return data;
        }))
      );
  }

  public getHotels() {
    return this.hotels$;
  }

  public getById(id) {
    if (id) {
      return this.afs.collection('hotels').doc(id).snapshotChanges().pipe(
        map(a => {
          const data = a.payload.data() as Hotel;
          data.id = a.payload.id;
          return data;
        })
      );
    }
    return null;
  }

}

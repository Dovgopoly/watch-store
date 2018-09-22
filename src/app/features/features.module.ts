import { NgModule } from '@angular/core';
import { CardsModule } from './cards/cards.module';
import { CardsComponent } from './cards/cards.component';
import { HotelsModule } from './hotels/hotels.module';

@NgModule({
  imports: [
    CardsModule,
    HotelsModule
  ],
  declarations: [],
  exports: [
    CardsModule,
    HotelsModule
  ]
})
export class FeaturesModule { }

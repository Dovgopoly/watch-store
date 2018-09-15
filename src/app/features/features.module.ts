import { NgModule } from '@angular/core';
import { CardsModule } from './cards/cards.module';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    CardsModule
  ],
  declarations: [],
  exports: [
    CardsModule
  ]
})
export class FeaturesModule { }

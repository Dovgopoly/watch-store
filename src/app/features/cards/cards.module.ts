import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CardsComponent } from './cards.component';
import { CardModule } from './card/card.module';
import { Routes, RouterModule } from '@angular/router';
import { CardService } from '../../core/services/card/card.service';

const CardsRoutes: Routes = [
  { path: '',      component: CardsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(CardsRoutes),
    SharedModule
  ],
  declarations: [
    CardsComponent
  ],
  providers: [CardService],
  exports: [
    CardsComponent,
    RouterModule
  ]
})
export class CardsModule { }

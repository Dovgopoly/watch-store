import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CardComponent } from './card.component';
import { Routes, RouterModule } from '@angular/router';
import { CardService } from '../../../core/services/card/card.service';

const CardRoutes: Routes = [
  { path: '', component: CardComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(CardRoutes),
    SharedModule
  ],
  declarations: [CardComponent],
  providers: [CardService],
  exports: [
    CardComponent,
    RouterModule
  ]
})
export class CardModule { }

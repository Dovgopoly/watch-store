import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { CardsComponent } from './features/cards/cards.component';
import { CardsModule } from './features/cards/cards.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BusketService } from './core/services/busket/busket.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,

    BrowserModule,
    SharedModule,
    CoreModule,
    FeaturesModule
  ],
  providers: [BusketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels.component';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { InfoComponent } from './info/info.component';
import { HotelsService } from '../../core/services/hotels/hotels.service';
import { TabPipe } from './tab.pipe';

const HotelsRoutes: Routes = [
  { path: '',      component: HotelsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(HotelsRoutes),
    CommonModule
  ],
  declarations: [HotelsComponent, ListComponent, WeatherComponent, InfoComponent, TabPipe],
  providers: [HotelsService],
  exports: [HotelsComponent]
})
export class HotelsModule { }

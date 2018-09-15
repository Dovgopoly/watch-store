import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './features/cards/cards.component';
import { CardComponent } from './features/cards/card/card.component';
import { AuthGuard } from './core/services/auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: './core/auth/auth.module#AuthModule',
    data: {is_login: true},
  },
  {
    path: 'register',
    loadChildren: './core/auth/auth.module#AuthModule',
    data: {is_login: false},
  },
  {
    path: 'watches',
    loadChildren: './features/cards/cards.module#CardsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'watches/:id',
    loadChildren: './features/cards/card/card.module#CardModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/watches',
    pathMatch: 'full'
  },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }

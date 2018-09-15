import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared/shared.module';

import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthService } from '../services/auth/auth.service';
import { RouterModule, Routes } from '@angular/router';

const AuthRoutes: Routes = [
  { path: '', component: AuthComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes),
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase, 'watch-shop'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  declarations: [AuthComponent],
  providers: [AuthService],
  exports: [AuthComponent]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [],
  declarations: [],
  exports: [AuthModule]
})
export class CoreModule { }

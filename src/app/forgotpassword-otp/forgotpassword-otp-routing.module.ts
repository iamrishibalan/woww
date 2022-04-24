import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpasswordOtpPage } from './forgotpassword-otp.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpasswordOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpasswordOtpPageRoutingModule {}

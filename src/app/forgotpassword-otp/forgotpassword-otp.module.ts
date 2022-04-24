import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordOtpPageRoutingModule } from './forgotpassword-otp-routing.module';

import { ForgotpasswordOtpPage } from './forgotpassword-otp.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpasswordOtpPageRoutingModule
  ],
  declarations: [ForgotpasswordOtpPage]
})
export class ForgotpasswordOtpPageModule {}

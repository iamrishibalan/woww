import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FpResetpasswordPageRoutingModule } from './fp-resetpassword-routing.module';

import { FpResetpasswordPage } from './fp-resetpassword.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FpResetpasswordPageRoutingModule
  ],
  declarations: [FpResetpasswordPage]
})
export class FpResetpasswordPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WheelIntroPageRoutingModule } from './wheel-intro-routing.module';

import { WheelIntroPage } from './wheel-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WheelIntroPageRoutingModule
  ],
  declarations: [WheelIntroPage]
})
export class WheelIntroPageModule {}

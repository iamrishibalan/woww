import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebinarselectPageRoutingModule } from './webinarselect-routing.module';

import { WebinarselectPage } from './webinarselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebinarselectPageRoutingModule
  ],
  declarations: [WebinarselectPage]
})
export class WebinarselectPageModule {}

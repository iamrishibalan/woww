import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywebinarPageRoutingModule } from './mywebinar-routing.module';

import { MywebinarPage } from './mywebinar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywebinarPageRoutingModule
  ],
  declarations: [MywebinarPage]
})
export class MywebinarPageModule {}

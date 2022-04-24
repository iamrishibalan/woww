import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewwebinarPageRoutingModule } from './newwebinar-routing.module';

import { NewwebinarPage } from './newwebinar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewwebinarPageRoutingModule
  ],
  declarations: [NewwebinarPage]
})
export class NewwebinarPageModule {}

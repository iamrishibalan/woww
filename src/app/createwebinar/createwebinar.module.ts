import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatewebinarPageRoutingModule } from './createwebinar-routing.module';

import { CreatewebinarPage } from './createwebinar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    CreatewebinarPageRoutingModule
  ],
  declarations: [CreatewebinarPage]
})
export class CreatewebinarPageModule {}

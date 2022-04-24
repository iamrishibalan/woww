import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminWebinarPageRoutingModule } from './admin-webinar-routing.module';

import { AdminWebinarPage } from './admin-webinar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    AdminWebinarPageRoutingModule
  ],
  declarations: [AdminWebinarPage]
})
export class AdminWebinarPageModule {}

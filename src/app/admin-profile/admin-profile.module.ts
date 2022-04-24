import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminProfilePageRoutingModule } from './admin-profile-routing.module';

import { AdminProfilePage } from './admin-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminProfilePage]
})
export class AdminProfilePageModule {}

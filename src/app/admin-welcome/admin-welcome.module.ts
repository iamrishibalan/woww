import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminWelcomePageRoutingModule } from './admin-welcome-routing.module';

import { AdminWelcomePage } from './admin-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminWelcomePageRoutingModule
  ],
  declarations: [AdminWelcomePage]
})
export class AdminWelcomePageModule {}

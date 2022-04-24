import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackAdminPageRoutingModule } from './feedback-admin-routing.module';

import { FeedbackAdminPage } from './feedback-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackAdminPageRoutingModule
  ],
  declarations: [FeedbackAdminPage]
})
export class FeedbackAdminPageModule {}

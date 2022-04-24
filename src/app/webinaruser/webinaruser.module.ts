import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebinaruserPageRoutingModule } from './webinaruser-routing.module';

import { WebinaruserPage } from './webinaruser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebinaruserPageRoutingModule
  ],
  declarations: [WebinaruserPage]
})
export class WebinaruserPageModule {}

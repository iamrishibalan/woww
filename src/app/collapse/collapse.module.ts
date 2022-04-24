import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollapsePageRoutingModule } from './collapse-routing.module';

import { CollapsePage } from './collapse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollapsePageRoutingModule
  ],
  declarations: [CollapsePage]
})
export class CollapsePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacrohelpPageRoutingModule } from './macrohelp-routing.module';

import { MacrohelpPage } from './macrohelp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacrohelpPageRoutingModule
  ],
  declarations: [MacrohelpPage]
})
export class MacrohelpPageModule {}

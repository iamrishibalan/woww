import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyactivitiesPageRoutingModule } from './myactivities-routing.module';

import { MyactivitiesPage } from './myactivities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyactivitiesPageRoutingModule
  ],
  declarations: [MyactivitiesPage]
})
export class MyactivitiesPageModule {}

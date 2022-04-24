import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDetaillsPageRoutingModule } from './personal-detaills-routing.module';

import { PersonalDetaillsPage } from './personal-detaills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    PersonalDetaillsPageRoutingModule
  ],
  declarations: [PersonalDetaillsPage]
})
export class PersonalDetaillsPageModule {}

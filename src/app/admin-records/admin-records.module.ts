import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRecordsPageRoutingModule } from './admin-records-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminRecordsPage } from './admin-records.page';
import { HelpPage } from '../help/help.page';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    AdminRecordsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminRecordsPage,HelpPage]
})
export class AdminRecordsPageModule {}

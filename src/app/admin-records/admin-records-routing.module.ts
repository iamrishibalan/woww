import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRecordsPage } from './admin-records.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRecordsPageRoutingModule {}

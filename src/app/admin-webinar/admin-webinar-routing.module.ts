import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminWebinarPage } from './admin-webinar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminWebinarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminWebinarPageRoutingModule {}

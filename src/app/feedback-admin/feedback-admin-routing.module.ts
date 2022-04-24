import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackAdminPage } from './feedback-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackAdminPageRoutingModule {}

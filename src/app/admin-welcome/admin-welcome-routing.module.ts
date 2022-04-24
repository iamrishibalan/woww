import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminWelcomePage } from './admin-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: AdminWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminWelcomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebinaruserPage } from './webinaruser.page';

const routes: Routes = [
  {
    path: '',
    component: WebinaruserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebinaruserPageRoutingModule {}

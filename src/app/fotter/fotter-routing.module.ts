import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotterPage } from './fotter.page';

const routes: Routes = [
  {
    path: '',
    component: FotterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotterPageRoutingModule {}

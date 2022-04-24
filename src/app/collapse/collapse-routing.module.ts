import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollapsePage } from './collapse.page';

const routes: Routes = [
  {
    path: '',
    component: CollapsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollapsePageRoutingModule {}

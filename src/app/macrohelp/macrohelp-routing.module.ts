import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacrohelpPage } from './macrohelp.page';

const routes: Routes = [
  {
    path: '',
    component: MacrohelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacrohelpPageRoutingModule {}

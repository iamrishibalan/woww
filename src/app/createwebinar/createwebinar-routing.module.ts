import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatewebinarPage } from './createwebinar.page';

const routes: Routes = [
  {
    path: '',
    component: CreatewebinarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatewebinarPageRoutingModule {}

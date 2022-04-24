import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywebinarPage } from './mywebinar.page';

const routes: Routes = [
  {
    path: '',
    component: MywebinarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywebinarPageRoutingModule {}

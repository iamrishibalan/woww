import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyactivitiesPage } from './myactivities.page';

const routes: Routes = [
  {
    path: '',
    component: MyactivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyactivitiesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpvideoPage } from './helpvideo.page';

const routes: Routes = [
  {
    path: '',
    component: HelpvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpvideoPageRoutingModule {}
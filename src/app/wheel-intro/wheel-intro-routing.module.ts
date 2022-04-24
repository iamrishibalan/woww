import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WheelIntroPage } from './wheel-intro.page';

const routes: Routes = [
  {
    path: '',
    component: WheelIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WheelIntroPageRoutingModule {}

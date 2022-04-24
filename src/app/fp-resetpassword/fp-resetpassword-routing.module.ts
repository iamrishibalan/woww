import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FpResetpasswordPage } from './fp-resetpassword.page';

const routes: Routes = [
  {
    path: '',
    component: FpResetpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FpResetpasswordPageRoutingModule {}

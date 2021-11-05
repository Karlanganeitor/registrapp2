import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAMPage } from './pam.page';

const routes: Routes = [
  {
    path: '',
    component: PAMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAMPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EDPage } from './ed.page';

const routes: Routes = [
  {
    path: '',
    component: EDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EDPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { INPage } from './in.page';

const routes: Routes = [
  {
    path: '',
    component: INPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class INPageRoutingModule {}

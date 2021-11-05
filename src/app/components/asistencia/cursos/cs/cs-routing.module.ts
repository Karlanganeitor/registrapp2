import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CSPage } from './cs.page';

const routes: Routes = [
  {
    path: '',
    component: CSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CSPageRoutingModule {}

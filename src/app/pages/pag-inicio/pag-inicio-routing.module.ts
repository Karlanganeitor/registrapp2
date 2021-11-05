import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaComponent } from 'src/app/components/asistencia/asistencia.component';
import { AsistirComponent } from 'src/app/components/asistir/asistir.component';

import { PagInicioPage } from './pag-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: PagInicioPage,
    children:[
      {
        path:'asistir',
        component: AsistirComponent
      },
      {
        path:'asistencia',
        component: AsistenciaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagInicioPageRoutingModule {}

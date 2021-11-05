import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/login/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/login/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pag-inicio',
    loadChildren: () => import('./pages/pag-inicio/pag-inicio.module').then( m => m.PagInicioPageModule)
  },
  
  {
    path: 'cambiar',
    loadChildren: () => import('./pages/cambiar/cambiar.module').then( m => m.CambiarPageModule)
  },
  {
    path: 'ed',
    loadChildren: () => import('./components/asistencia/cursos/ed/ed.module').then( m => m.EDPageModule)
  },
  {
    path: 'pam',
    loadChildren: () => import('./components/asistencia/cursos/pam/pam.module').then( m => m.PAMPageModule)
  },
  {
    path: 'in',
    loadChildren: () => import('./components/asistencia/cursos/in/in.module').then( m => m.INPageModule)
  },
  {
    path: 'ar',
    loadChildren: () => import('./components/asistencia/cursos/ar/ar.module').then( m => m.ARPageModule)
  },
  {
    path: 'cs',
    loadChildren: () => import('./components/asistencia/cursos/cs/cs.module').then( m => m.CSPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

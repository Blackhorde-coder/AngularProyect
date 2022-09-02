import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'clicker', pathMatch: 'full'},
  {path: 'clicker', loadChildren: () => import('./clicker-module/clicker-module.module').then(m => m.ClickerModuleModule)},
  {path: 'puntuaciones', loadChildren: () => import('./puntuaciones/puntuaciones.module').then(m => m.PuntuacionesModule)},
  {path: '**', redirectTo: 'clicker', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

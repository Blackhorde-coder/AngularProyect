import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntuacionesPageComponent } from './pages/puntuaciones-page/puntuaciones-page.component';

const routes: Routes = [
  {path: '**', component: PuntuacionesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntuacionesRoutingModule { }

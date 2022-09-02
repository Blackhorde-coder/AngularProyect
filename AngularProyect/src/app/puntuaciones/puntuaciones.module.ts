import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntuacionesRoutingModule } from './puntuaciones-routing.module';
import { PuntuacionesPageComponent } from './pages/puntuaciones-page/puntuaciones-page.component';


@NgModule({
  declarations: [
    PuntuacionesPageComponent
  ],
  imports: [
    CommonModule,
    PuntuacionesRoutingModule
  ]
})
export class PuntuacionesModule { }

import { Component, OnInit } from '@angular/core';
export interface producto{
  nombre: string;
  precio: number;
}
@Component({
  selector: 'app-puntuaciones-page',
  templateUrl: './puntuaciones-page.component.html',
  styleUrls: ['./puntuaciones-page.component.scss']
})
export class PuntuacionesPageComponent {

  title = 'ProyectoAngular';
  active = false;

  bonusGlobal = true;
  total = 0;

  tablaPrductos: producto [] = [
    {nombre: 'Azucar', precio: 100},
    {nombre: 'Galletas Bagley', precio: 80},
    {nombre: 'Dulce de leche', precio: 120},
    {nombre: 'Cafe molido', precio: 200},
  ];

  isactive() {
    if(this.active) {
      this.active = false;
    }else{
      this.active = true;
    }
  }
}

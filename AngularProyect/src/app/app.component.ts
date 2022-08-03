import { Component } from '@angular/core';


export interface producto{
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'ProyectoAngular';
  contador = 0;
  active = false;

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

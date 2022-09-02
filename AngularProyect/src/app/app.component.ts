import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'ProyectoAngular';
  active = false;

  bonusGlobal = true;
  total = 0;


  constructor(){
    window.setTimeout(() => {
      this.bonusGlobal = false;
    }, 5000);
  }
  sumarAlTotal(valor: number){
    this.total = this.total + valor;
  }

}

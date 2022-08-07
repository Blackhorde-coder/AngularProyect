import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {

  constructor() {}
  contador = 0;
  @Input() bonus = false;
  @Output() sumarValor = new EventEmitter<number>();

  sumar(cantidad: number): void {
    this.contador = this.contador + cantidad;
    this.sumarValor.emit(cantidad);
    }
}

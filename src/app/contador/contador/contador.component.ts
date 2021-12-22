import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h2>lA BASE ES: {{ base }}</h2>
    <button (click)="sumar()">+ {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="restar(base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  public titulo: string = 'Hola mundo';
  base: number = 5;
  numero: number = 10;

  sumar(): void {
    this.numero += this.base;
  }

  restar(valor: number): void {
    this.numero -= valor;
  }
}

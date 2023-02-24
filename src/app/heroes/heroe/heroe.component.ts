import { Component } from '@angular/core';



@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class heroeComponent {
  nombre: string = 'ironman';
  edad: number = 25;


  get nombreCapitalisado(): string {
    return this.nombre.toUpperCase();
  }


  obtenerNombre(): string {
    return `
    ${this.nombre} - ${this.edad}

    `
  }


  cambiarNombre() {
    this.nombre = 'spiderman'
  }
  cambiarEdad() {
    this.edad = 50
  }
}

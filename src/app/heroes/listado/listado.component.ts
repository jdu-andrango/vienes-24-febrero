import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {


  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'thor', 'capitan america'];
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
  colores: string[] = ['azul', 'verde', 'gris']

  heroeBorrado: string = '';


  borrarHeroe() {
    console.log('borrando.......')
    this.heroeBorrado = this.heroes.shift() || "";

  }
}

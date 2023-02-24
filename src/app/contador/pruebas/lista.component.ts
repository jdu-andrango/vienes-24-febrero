import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  template: `


<input type="text" name="" id="">

<button (click)="nombre=nombre+'lloron'"> {{nombre}}</button>








  `
})

export class lista {

  nombre: string = 'enviar'

  lloron(nombre: string) {



    let llora = nombre + ' ' + 'lloron'
  }




}

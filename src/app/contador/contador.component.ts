import { Component } from "@angular/core";



@Component({

  selector: 'app-contador',
  template: `


  <!--titulo-->
<h1>{{title}}</h1>


<!--nuevo mas comprimidp-->
<h1>la base es <strong>{{base}}</strong></h1>
<!--evento click-->
<!--aumenta el numero de uno a uno gracias al codigo-->
<!--<button type="" (click)="sumar() ">+1</button>-->
<button type="" (click)="acumular(base)">{{base}}</button>

<!--numero a cambiar-->
<samp>{{numero}}</samp>
<!--tarea realizar el boton de restar numero-->
<button type="" (click)="acumular(-base) ">{{base}}</button>





  `

})

export class contadorComponent {
  title = 'cambioNombre';




  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }

}

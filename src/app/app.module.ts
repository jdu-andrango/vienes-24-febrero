import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contadorComponent } from './contador/contador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { navBar } from './contador/pruebas/navBar.component';
import { formulario } from './contador/pruebas/formulario.component';
import { lista } from './contador/pruebas/lista.component';
import { MatButtonModule } from '@angular/material/button';
import { heroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { ListadoPruebaComponent } from './heroes/listado-prueba/listado-prueba.component';
import { ListadoPrueba1Component } from './heroes/listado-prueba1/listado-prueba1.component';
import { ListadoPrueba2Component } from './heroes/listado-prueba2/listado-prueba2.component';


@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,
    navBar,
    formulario,
    lista,
    heroeComponent,
    ListadoComponent,
    ListadoPruebaComponent,
    ListadoPrueba1Component,
    ListadoPrueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

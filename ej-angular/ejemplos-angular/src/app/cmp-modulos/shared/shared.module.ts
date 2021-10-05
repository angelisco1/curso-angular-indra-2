import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { OcultarNumerosTarjetaPipe } from './ocultar-numeros-tarjeta.pipe';


@NgModule({
  declarations: [
    TarjetaCreditoComponent,
    OcultarNumerosTarjetaPipe
  ],
  exports: [
    TarjetaCreditoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

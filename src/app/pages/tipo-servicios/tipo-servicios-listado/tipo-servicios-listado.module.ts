import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoServiciosListadoPageRoutingModule } from './tipo-servicios-listado-routing.module';

import { TipoServiciosListadoPage } from './tipo-servicios-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoServiciosListadoPageRoutingModule
  ],
  declarations: [TipoServiciosListadoPage]
})
export class TipoServiciosListadoPageModule {}

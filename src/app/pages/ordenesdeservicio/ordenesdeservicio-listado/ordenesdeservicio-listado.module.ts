import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenesdeservicioListadoPageRoutingModule } from './ordenesdeservicio-listado-routing.module';

import { OrdenesdeservicioListadoPage } from './ordenesdeservicio-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenesdeservicioListadoPageRoutingModule
  ],
  declarations: [OrdenesdeservicioListadoPage]
})
export class OrdenesdeservicioListadoPageModule {}

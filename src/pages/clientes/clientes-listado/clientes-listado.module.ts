import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesListadoPageRoutingModule } from './clientes-listado-routing.module';

import { ClientesListadoPage } from './clientes-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesListadoPageRoutingModule
  ],
  declarations: [ClientesListadoPage]
})
export class ClientesListadoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesAddEditPageRoutingModule } from './clientes-add-edit-routing.module';

import { ClientesAddEditPage } from './clientes-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesAddEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClientesAddEditPage]
})
export class ClientesAddEditPageModule {}

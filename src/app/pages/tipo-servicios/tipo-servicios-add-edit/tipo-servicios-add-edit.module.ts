import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoServiciosAddEditPageRoutingModule } from './tipo-servicios-add-edit-routing.module';

import { TipoServiciosAddEditPage } from './tipo-servicios-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoServiciosAddEditPageRoutingModule
  ],
  declarations: [TipoServiciosAddEditPage]
})
export class TipoServiciosAddEditPageModule {}

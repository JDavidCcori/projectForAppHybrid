import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenesdeservicioAddEditPageRoutingModule } from './ordenesdeservicio-add-edit-routing.module';

import { OrdenesDeServicioAddEditPage } from './ordenesdeservicio-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenesdeservicioAddEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OrdenesDeServicioAddEditPage]
})
export class OrdenesDeServicioAddEditPageModule {}

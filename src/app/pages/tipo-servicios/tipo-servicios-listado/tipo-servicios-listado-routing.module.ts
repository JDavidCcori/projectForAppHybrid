import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoServiciosListadoPage } from './tipo-servicios-listado.page';

const routes: Routes = [
  {
    path: '',
    component: TipoServiciosListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoServiciosListadoPageRoutingModule {}

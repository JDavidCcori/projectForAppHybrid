import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenesdeservicioListadoPage } from './ordenesdeservicio-listado.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenesdeservicioListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenesdeservicioListadoPageRoutingModule {}

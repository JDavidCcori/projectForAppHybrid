import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesListadoPage } from './clientes-listado.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesListadoPageRoutingModule {}

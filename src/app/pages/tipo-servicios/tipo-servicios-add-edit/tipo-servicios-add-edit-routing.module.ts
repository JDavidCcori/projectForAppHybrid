import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoServiciosAddEditPage } from './tipo-servicios-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TipoServiciosAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoServiciosAddEditPageRoutingModule {}

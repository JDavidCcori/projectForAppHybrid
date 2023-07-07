import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenesDeServicioAddEditPage } from './ordenesdeservicio-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenesDeServicioAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenesdeservicioAddEditPageRoutingModule {}

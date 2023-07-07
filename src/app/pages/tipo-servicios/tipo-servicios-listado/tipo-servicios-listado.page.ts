import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-servicios-listado',
  templateUrl: './tipo-servicios-listado.page.html',
  styleUrls: ['./tipo-servicios-listado.page.scss'],
})
export class TipoServiciosListadoPage implements OnInit {

  public tiposServicios = [
    { id: 1, nombre: 'Alineamiento', valor: 12.34},
    { id: 2, nombre: 'Balanceo', valor: 56.78},
    { id: 3, nombre: 'Supervision de frenos', valor: 98.12},
    { id: 4, nombre: 'Suspencion', valor: 34.56},
  ];

  constructor() { }

  ngOnInit() {
  }

}

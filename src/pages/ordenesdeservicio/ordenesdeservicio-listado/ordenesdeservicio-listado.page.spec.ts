import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenesdeservicioListadoPage } from './ordenesdeservicio-listado.page';

describe('OrdenesdeservicioListadoPage', () => {
  let component: OrdenesdeservicioListadoPage;
  let fixture: ComponentFixture<OrdenesdeservicioListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdenesdeservicioListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

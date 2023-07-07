import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoServiciosListadoPage } from './tipo-servicios-listado.page';

describe('TipoServiciosListadoPage', () => {
  let component: TipoServiciosListadoPage;
  let fixture: ComponentFixture<TipoServiciosListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipoServiciosListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

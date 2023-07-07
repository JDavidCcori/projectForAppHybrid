import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesListadoPage } from './clientes-listado.page';

describe('ClientesListadoPage', () => {
  let component: ClientesListadoPage;
  let fixture: ComponentFixture<ClientesListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientesListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

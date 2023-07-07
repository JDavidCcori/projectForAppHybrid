import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesAddEditPage } from './clientes-add-edit.page';

describe('ClientesAddEditPage', () => {
  let component: ClientesAddEditPage;
  let fixture: ComponentFixture<ClientesAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientesAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

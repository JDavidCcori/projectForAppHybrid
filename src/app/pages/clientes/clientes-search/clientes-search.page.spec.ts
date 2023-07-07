import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesSearchPage } from './clientes-search.page';

describe('ClientesSearchPage', () => {
  let component: ClientesSearchPage;
  let fixture: ComponentFixture<ClientesSearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientesSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

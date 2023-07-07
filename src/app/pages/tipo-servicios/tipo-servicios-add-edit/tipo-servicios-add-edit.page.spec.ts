import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoServiciosAddEditPage } from './tipo-servicios-add-edit.page';

describe('TipoServiciosAddEditPage', () => {
  let component: TipoServiciosAddEditPage;
  let fixture: ComponentFixture<TipoServiciosAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipoServiciosAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

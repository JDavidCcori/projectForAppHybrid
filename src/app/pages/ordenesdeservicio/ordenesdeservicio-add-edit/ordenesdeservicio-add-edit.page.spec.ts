import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenesdeservicioAddEditPage } from './ordenesdeservicio-add-edit.page';

describe('OrdenesdeservicioAddEditPage', () => {
  let component: OrdenesdeservicioAddEditPage;
  let fixture: ComponentFixture<OrdenesdeservicioAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdenesdeservicioAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

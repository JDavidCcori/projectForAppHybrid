import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteAddEditPage } from './cliente-add-edit.page';

describe('ClienteAddEditPage', () => {
  let component: ClienteAddEditPage;
  let fixture: ComponentFixture<ClienteAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClienteAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

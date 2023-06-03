import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInventariosAgotadosComponent } from './listar-inventarios-agotados.component';

describe('ListarInventariosAgotadosComponent', () => {
  let component: ListarInventariosAgotadosComponent;
  let fixture: ComponentFixture<ListarInventariosAgotadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInventariosAgotadosComponent]
    });
    fixture = TestBed.createComponent(ListarInventariosAgotadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

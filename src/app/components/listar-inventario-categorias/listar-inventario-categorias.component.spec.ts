import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInventarioCategoriasComponent } from './listar-inventario-categorias.component';

describe('ListarInventarioCategoriasComponent', () => {
  let component: ListarInventarioCategoriasComponent;
  let fixture: ComponentFixture<ListarInventarioCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInventarioCategoriasComponent]
    });
    fixture = TestBed.createComponent(ListarInventarioCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

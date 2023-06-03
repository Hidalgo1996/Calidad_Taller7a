import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInventarioProductoComponent } from './listar-inventario-producto.component';

describe('ListarInventarioProductoComponent', () => {
  let component: ListarInventarioProductoComponent;
  let fixture: ComponentFixture<ListarInventarioProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInventarioProductoComponent]
    });
    fixture = TestBed.createComponent(ListarInventarioProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProductosComponent } from './registrar-productos.component';

describe('RegistrarProductosComponent', () => {
  let component: RegistrarProductosComponent;
  let fixture: ComponentFixture<RegistrarProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarProductosComponent]
    });
    fixture = TestBed.createComponent(RegistrarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarComprasComponent } from './registrar-compras.component';

describe('RegistrarComprasComponent', () => {
  let component: RegistrarComprasComponent;
  let fixture: ComponentFixture<RegistrarComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarComprasComponent]
    });
    fixture = TestBed.createComponent(RegistrarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

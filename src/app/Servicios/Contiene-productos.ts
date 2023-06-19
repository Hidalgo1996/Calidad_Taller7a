import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Producto } from '../Models/Producto';
import { Contienecategoria } from 'src/app/Servicios/Contiene-categoria';

@Injectable({
  providedIn: 'root'
})
export class ContieneProductos {
  form!: FormGroup;
  constructor(private recibeCategoriaServices: Contienecategoria) {} // Inyecta el servicio ContieneCategoria en el constructor

  listProducto: Producto[] = [
    new Producto(this.recibeCategoriaServices.listCategoria[2].categoria_nombre, "Atún", "El cocinero", "172g", 1.20, 1.50, 45),
    new Producto(this.recibeCategoriaServices.listCategoria[2].categoria_nombre, "Sardina", "La Favorita", "300g", 1.40, 2.50, 5),
    new Producto(this.recibeCategoriaServices.listCategoria[0].categoria_nombre, "Manzana", "Frutitas S.A", "50g", 0.15, 0.50, 50)
  ];

  agregaProductosServicio(listProducto: Producto){
    this.listProducto.push(listProducto);
    console.log(listProducto);
  }
}

import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { ContieneProductos } from 'src/app/Servicios/Contiene-productos';


@Component({
  selector: 'app-listar-inventario-producto',
  templateUrl: './listar-inventario-producto.component.html',
  styleUrls: ['./listar-inventario-producto.component.css']
})
export class ListarInventarioProductoComponent implements OnInit{
  productos: Producto[] = [];

  //INYECTA SERVICIO
  constructor(private contieneProductos: ContieneProductos) { }

  //TRAE LA VISTA
  ngOnInit(): void {
    this.productos = this.contieneProductos.listProducto;
  }
}

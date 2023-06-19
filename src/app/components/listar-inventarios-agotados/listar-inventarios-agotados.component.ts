import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { ContieneProductos } from 'src/app/Servicios/contiene-productos';

@Component({
  selector: 'app-listar-inventarios-agotados',
  templateUrl: './listar-inventarios-agotados.component.html',
  styleUrls: ['./listar-inventarios-agotados.component.css']
})
export class ListarInventariosAgotadosComponent implements OnInit{
  productos: Producto[] = [];

  //INYECTA SERVICIO
  constructor(private contieneProductos: ContieneProductos) { }

  //TRAE LA VISTA
  ngOnInit(): void {
    this.productos = this.contieneProductos.listProducto;
  }

  siStockInsufficient(stock: number): boolean {
    return stock < 10;
  }
}

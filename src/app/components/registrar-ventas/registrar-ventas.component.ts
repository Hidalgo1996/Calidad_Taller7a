import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/Models/Categoria';
import { Producto } from 'src/app/Models/Producto';
import { Contienecategoria } from 'src/app/Servicios/Contiene-categoria';
import { ContieneProductos } from 'src/app/Servicios/Contiene-productos';

@Component({
  selector: 'app-registrar-ventas',
  templateUrl: './registrar-ventas.component.html',
  styleUrls: ['./registrar-ventas.component.css']
})
export class RegistrarVentasComponent implements OnInit{
  form!: FormGroup;
  categoria="";
  nombre_producto="";
  nombre_marca="";
  peso="";
  precio_compra="";
  precio_venta="";
  cantidad_stock="";
  categorias: Categoria[] = [];
  productos: Producto[] = [];
  
  //Servicio de llamado
  constructor(private recibeCategoriaServices: Contienecategoria, private reciveProductoServices: ContieneProductos) {}

  ngOnInit(): void {
    //Recibe categorias
    this.categorias = this.recibeCategoriaServices.listCategoria;
    //Recibe registro productos
    this.productos = this.reciveProductoServices.listProducto;
  }

}

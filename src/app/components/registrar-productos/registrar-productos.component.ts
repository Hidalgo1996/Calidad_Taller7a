import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/Models/Categoria';
import { Producto } from 'src/app/Models/Producto';
import { Contienecategoria } from 'src/app/Servicios/Contiene-categoria';
import { ContieneProductos } from 'src/app/Servicios/Contiene-productos';

@Component({
  selector: 'app-registrar-productos',
  templateUrl: './registrar-productos.component.html',
  styleUrls: ['./registrar-productos.component.css']
})
export class RegistrarProductosComponent implements OnInit{
  form!: FormGroup;
  categoria="";
  nombre_producto="";
  nombre_marca="";
  peso="";
  precio_compra="";
  precio_venta="";
  cantidad_stock="";
  categorias: Categoria[] = [];
  producto: Producto[] = [];
  
  //Servicio de llamado
  constructor(private recibeCategoriaServices: Contienecategoria, private reciveProductoServices: ContieneProductos) {}

  ngOnInit(): void {
    //Recibe categorias
    this.categorias = this.recibeCategoriaServices.listCategoria;

    //Crea formulario
    this.form = new FormGroup({
      categoria: new FormControl('', Validators.required),
      nombre_producto: new FormControl('', Validators.required),
      nombre_marca: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      precio_compra: new FormControl('', Validators.required),
      precio_venta: new FormControl('', Validators.required),
      cantidad_stock: new FormControl('', Validators.required)
    })
  }

  agregarProducto() {
    if (this.form.valid) {
      let categoria = this.form.get('categoria')?.value;
      let nombre_producto = this.form.get('nombre_producto')?.value;
      let nombre_marca = this.form.get('nombre_marca')?.value;
      let peso = this.form.get('peso')?.value;
      let precio_compra = parseFloat(this.form.get('precio_compra')?.value);
      let precio_venta = parseFloat(this.form.get('precio_venta')?.value);
      let cantidad_stock = parseInt(this.form.get('cantidad_stock')?.value);
  
      let nuevoProducto = new Producto(categoria, nombre_producto, nombre_marca, peso, precio_compra, precio_venta, cantidad_stock);
      this.reciveProductoServices.agregaProductosServicio(nuevoProducto);
  
      // Restablece los campos del formulario
      this.form.reset();
    }
  }
}

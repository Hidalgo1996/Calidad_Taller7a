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
  productosFiltrados: Producto[] = [];
    
  //Servicio de llamado
  constructor(private recibeCategoriaServices: Contienecategoria, private reciveProductoServices: ContieneProductos) {}

  ngOnInit(): void {
    this.categorias = this.recibeCategoriaServices.listCategoria;
    this.productos = this.reciveProductoServices.listProducto;

    this.form = new FormGroup({
      categoria: new FormControl(''),
      producto: new FormControl(''),
      cantidad: new FormControl(''),
      cantidadCompra: new FormControl({ value: '', disabled: true })
    });
  }

  filtrarProductosPorCategoria(event: Event) {
    const categoriaSeleccionada = (event.target as HTMLSelectElement).value;
    this.productosFiltrados = this.productos.filter(producto => producto.categoria === categoriaSeleccionada);
    this.form.get('producto')?.setValue(''); // Reiniciamos el valor del producto seleccionado
  }

  actualizarPrecioVenta(nombreProducto: string): void {
    const productoSeleccionado = this.productos.find(producto => producto.nombre_producto === nombreProducto);

    if (productoSeleccionado) {
      this.nombre_producto = nombreProducto;
      this.precio_venta = productoSeleccionado.precio_venta.toString();
    } else {
      this.nombre_producto = "";
      this.precio_venta = "";
    }

    this.form.controls['cantidadCompra'].setValue('');
  }

  calcularPrecioTotal() {
    const cantidad = this.form.get('cantidad')?.value;
    const productoSeleccionado = this.productos.find(producto => producto.nombre_producto === this.form.get('producto')?.value);
  
    if (cantidad && productoSeleccionado) {
      const precioTotal = cantidad * productoSeleccionado.precio_venta;
      this.form.get('cantidadCompra')?.setValue(precioTotal.toFixed(2));
    } else {
      this.form.get('cantidadCompra')?.setValue('');
    }
  }

}

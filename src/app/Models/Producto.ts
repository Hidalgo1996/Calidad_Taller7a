export class Producto{
    categoria: string;
    nombre_producto: string;
    nombre_marca: string;
    peso: string;
    precio_compra: number;
    precio_venta: number;
    cantidad_stock: number;


    constructor(categoria: string, nombre_producto: string, nombre_marca: string, peso: string, precio_compra: number, precio_venta: number, cantidad_stock: number) {
        this.categoria = categoria;
        this.nombre_producto = nombre_producto;
        this.nombre_marca = nombre_marca;
        this.peso = peso;
        this.precio_compra = precio_compra;
        this.precio_venta = precio_venta;
        this.cantidad_stock = cantidad_stock;
    }
}
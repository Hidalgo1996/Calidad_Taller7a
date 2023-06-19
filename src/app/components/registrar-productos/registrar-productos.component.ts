import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Models/Categoria';
import { Contienecategoria } from 'src/app/Servicios/Contiene-categoria';

@Component({
  selector: 'app-registrar-productos',
  templateUrl: './registrar-productos.component.html',
  styleUrls: ['./registrar-productos.component.css']
})
export class RegistrarProductosComponent implements OnInit{
  categorias: Categoria[] = [];
  
  //Servicio de llamado
  constructor(private recibeCategoriaServices: Contienecategoria) {}

  ngOnInit(): void {
    this.categorias = this.recibeCategoriaServices.listCategoria;
  }

}

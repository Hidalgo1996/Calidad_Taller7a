import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/Models/Categoria';
import { Contienecategoria } from 'src/app/Servicios/Contiene-categoria';

@Component({
  selector: 'app-listar-inventario-categorias',
  templateUrl: './listar-inventario-categorias.component.html',
  styleUrls: ['./listar-inventario-categorias.component.css']
})
export class ListarInventarioCategoriasComponent implements OnInit{
  constructor(private recibeCategoriaServices: Contienecategoria) {}
  form!: FormGroup;
  categoria = "";
  listCategoria: Categoria[] = [];

  ngOnInit(): void {
    this.listCategoria=this.recibeCategoriaServices.listCategoria;
  }

}

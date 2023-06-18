import { Injectable } from '@angular/core';
import { Categoria } from '../Models/Categoria';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaestroArregloService {
  form!: FormGroup;
  constructor() { }

  listCategoria: Categoria[] =[
    new Categoria("Frutas"),
    new Categoria("Verduras"),
    new Categoria("Enlatados")
  ];

  agregarCategoriaServicio(listCategoria: Categoria){
    this.listCategoria.push(listCategoria);
    console.log(listCategoria);
  }

}

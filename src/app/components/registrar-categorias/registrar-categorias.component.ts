import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/Models/Categoria';
import { MaestroArregloService } from 'src/app/Servicios/Contiene-categoria';

@Component({
  selector: 'app-registrar-categorias',
  templateUrl: './registrar-categorias.component.html',
  styleUrls: ['./registrar-categorias.component.css']
})
export class RegistrarCategoriasComponent implements OnInit {
  form!: FormGroup;
  categoria = "";
  listCategoria: Categoria[] = [];

  constructor(private recibeCategoriaServices: MaestroArregloService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      categoria: new FormControl('', Validators.required)
    })
  }

  agregarEmpleado() {
    if (this.form.valid) {
      let micategoria = new Categoria(this.form.value.categoria);
      this.recibeCategoriaServices.agregarCategoriaServicio(micategoria);
      this.form.reset(); // Restablece el formulario después de agregar una categoría
    }
  }  
}

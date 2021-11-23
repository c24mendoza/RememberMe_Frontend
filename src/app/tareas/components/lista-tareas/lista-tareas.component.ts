import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareasServiceService } from 'src/app/services/tareas-service.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  listaTareas: Tarea[] = [];
  tituloNuevaTarea: string = "";

  constructor(private tareaService: TareasServiceService) { }

  ngOnInit(): void {
    this.traerTareas();


  }

  traerTareas() {
    this.tareaService.getTareas().subscribe(tareas => {
      this.listaTareas = tareas;
      const lista = JSON.stringify(tareas);
      // console.log(lista);

    });

  }
  tareaRapida() {
    // console.log(this.tituloNuevaTarea);
    let nuevaTarea = new Tarea();
    nuevaTarea.titulo = this.tituloNuevaTarea;
    nuevaTarea.descripcion = "";
    nuevaTarea.id_usuario = 1;
    this.tareaService.createTarea(nuevaTarea).subscribe(tareas => {

      const lista = JSON.stringify(tareas);
      // console.log(tareas.body.tarea);
      this.tituloNuevaTarea = "";
      // this.traerTareas();
      let tareaJustCreated = new Tarea();
      tareaJustCreated = tareas.body.tarea;
      this.listaTareas.push(tareaJustCreated);

    });

  }

}

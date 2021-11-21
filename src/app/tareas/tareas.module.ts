import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { TareasServiceService } from '../services/tareas-service.service';
import { ItemTareaComponent } from './components/item-tarea/item-tarea.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { TareaDetailComponent } from './components/tarea-detail/tarea-detail.component';



@NgModule({
  declarations: [
    ListaTareasComponent,
    ItemTareaComponent,
    TareaDetailComponent

  ],
  entryComponents: [TareaDetailComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    TareasServiceService
  ],
})
export class TareasModule { }

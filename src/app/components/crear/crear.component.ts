import { Component, OnInit } from '@angular/core';
import { Tareas, listaTareas} from "../../Interfaces/tareas"

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})

export class CrearComponent implements OnInit {

  lista:Array<Tareas>=listaTareas;

  constructor() { }

  ngOnInit(): void {
  }

}

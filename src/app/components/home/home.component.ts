import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Tareas, listaTareas} from "../../Interfaces/tareas"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  formulario:FormGroup;
  titulo:any;
  estado:any;
  lista:Array<Tareas>=listaTareas;

  constructor(public fb:FormBuilder) {
    this.formulario=this.fb.group({
      titulo:["",[Validators.required,Validators.maxLength(15)]],
      estado:["",[Validators.required]],
      
   });
   
  }

  ngOnInit(): void {
    this.titulo=this.formulario.get("titulo") as FormGroup;
    this.estado=this.formulario.get("estado") as FormGroup;
    
  }

  Crear(){
    let tarea:Tareas={titulo:this.titulo.value,estado:this.estado.value}
    this.lista.push(tarea);
  }

  Eliminar(){
    this.lista.forEach((item,index)=>{
      if(this.titulo.value==item){
        this.lista.splice(index,1);
      }
    })
  }
}

import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
  `]
})
export class TemplateComponent {


  Usuario:Object={
    nombre: null,
    apellido: null,
    correo:null,
    pais: "",
    sexo:"Hombre",
    acepta: false
  }

  paises = [{
      codigo: "NIC",
      nombre: "Nicaragua"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }]

  sexos:string[] = ["Hombre","Mujer","Sin definar"]

  constructor() { }

  guardar(forma:NgForm){
    console.log("ngForm", forma);
    console.log("Valo forma", forma.value);
    console.log("Usuario", this.Usuario);
  }

}

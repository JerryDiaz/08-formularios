import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  forma:FormGroup;

  usuario:Object = {
    nombreCompleto: {
      nombre: "Jerry",
      apellido: "Diaz"
    },
    correo: "jdiaz2040@hotmail.com"
    //,
    //pasatiempos: ["Dormir","Correr","Jugar"]
  }

  constructor() { 
    
    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombreCompleto': new FormGroup({
        
      'nombre': new FormControl('', [Validators.required,
                                  Validators.minLength(3)]),
      'apellido': new FormControl('',[
                                      Validators.required,
                                      this.noRepeat
                                    ])
      }),
      'correo': new FormControl('',[
                                    Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]
                                    ),
      'pasatiempos': new FormArray([
        new FormControl('Correr',Validators.required)
      ])                              
    });

    //this.forma.setValue(this.usuario);
  }

  guardarCambios(){    
    console.log(this.forma);
    
    
    // this.forma.reset({
    //   nombreCompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // });
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    );
  }

  noRepeat(controls: FormControl):{[s:string]:boolean }{

    if(controls.value==="herrera"){
      return {
        norepeat:true
      }
    }

    return null;

  }



}

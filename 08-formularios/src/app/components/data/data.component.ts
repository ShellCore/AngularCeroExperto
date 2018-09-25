import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styles: []
})
export class DataComponent {

    forma: FormGroup;

    usuario: any = {
        nombreCompleto: {
            nombre: "Cesar",
            apellido: "Morales"
        },
        correo: "cmorales@mail.com",
        pasatiempos: ['Correr']
    }

    constructor() {
        this.forma = new FormGroup({
            'nombreCompleto' : new FormGroup({
                'nombre': new FormControl('', [
                    Validators.required,
                    Validators.minLength(3)
                ]),
                'apellido': new FormControl('', [
                    Validators.required,
                    this.noHerrera
                ])
            }),
            'correo': new FormControl('', [
                Validators.required, 
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
            ]),
            'pasatiempos' : new FormArray([
                new FormControl('', Validators.required)
            ])
        });

        this.forma.setValue(this.usuario);
    }

    guardarCambios() {
        console.log(this.forma.value);
        // this.forma.reset({
        //     nombreCompleto : {
        //         nombre: "",
        //         apellido: ""
        //     },
        //     correo: ""
        // });
    }

    agregarPasatiempo() {
        (<FormArray> this.forma.controls['pasatiempos']).push(new FormControl('', Validators.required));
    }

    noHerrera(control: FormControl): {[s:string]: boolean} {

        if (control.value == "herrera") {
            return {noherrera: true}
        }
        return null;
    }
}

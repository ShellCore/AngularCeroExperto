import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
            ]),
            'username': new FormControl('', Validators.required, this.existeUsuario),
            'password1': new FormControl('', Validators.required),
            'password2': new FormControl()
        });

        this.forma.controls['password2'].setValidators([
            Validators.required,
            this.noIgual.bind(this.forma)
        ]);

        // this.forma.setValue(this.usuario);
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

    noHerrera(control: FormControl): any {

        if (control.value == "herrera") {
            return {noherrera: true}
        }
        return null;
    }

    noIgual(control: FormControl): any {

        let forma: any = this;
        if (control.value != forma.controls['password1'].value) {
            return {noiguales: true}
        }
        return null;
    }

    existeUsuario(control: FormControl) : Promise<any>|Observable<any> {
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == "strider") {
                    resolve({existe: true});
                } else {
                    resolve(null);
                }
            }, 3000);
        });

        return promesa;
    }
}

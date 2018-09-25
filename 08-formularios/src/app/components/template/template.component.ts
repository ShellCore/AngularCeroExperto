import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

    usuario: Object = {
        nombre: null,
        apellido: null,
        correo: null,
        pais: "",
        sexo: "Masculino",
        acepta: false
    }

    paises = [
        {codigo: "CRI", pais: "Costa Rica"},
        {codigo: "MXC", pais: "México"},
        {codigo: "EUA", pais: "Estados Unidos"},
        {codigo: "BRZ", pais: "Brazil"},
        {codigo: "VEN", pais: "Venezuela"}
    ];

    sexos = [
        "Masculino",
        "Femenino"
    ]

    constructor() { }

    guardar(forma: NgForm) {
        console.log("ngForm", forma);
        console.log("Valor", forma.value);
        console.log("Usuario", this.usuario);
    }
}

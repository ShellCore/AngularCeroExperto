import { Injectable } from "@angular/core";
import { Lista } from '../models';

@Injectable()
export class DeseosService {

    listas: Lista[] = [];
    
    constructor() {
        console.log(this.listas);
        this.cargarStorage();
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargarStorage() {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
    }
}
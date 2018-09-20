import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavParams } from "ionic-angular";

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage {

    lista: Lista;

    constructor(
        public deseosService: DeseosService,
        private navParams: NavParams
    ) {
        const titulo = navParams.get('titulo');
        this.lista = new Lista(titulo);
    }

    
}
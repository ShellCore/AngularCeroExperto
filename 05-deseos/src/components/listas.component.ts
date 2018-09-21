import { Component, Input } from "@angular/core";
import { DeseosService } from '../services/deseos.service';
import { NavController } from 'ionic-angular';
import { Lista } from '../models/lista.model';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {

    @Input() terminado: boolean = false;

    constructor(
        public deseosService: DeseosService,
        private navCtrl: NavController
    ) { }


    listaSeleccionada(lista: Lista) {
        this.navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    borrarLista(lista: Lista) {
        this.deseosService.borrarLista(lista);
    }
}

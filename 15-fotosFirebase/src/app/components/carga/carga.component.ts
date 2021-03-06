import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
    selector: 'app-carga',
    templateUrl: './carga.component.html',
    styles: []
})
export class CargaComponent implements OnInit {

    archivos: FileItem[] = [];
    estaSobreElemento = false;

    constructor(public _service: CargaImagenesService) { }

    ngOnInit() {
    }
    
    cargarImagenes() {
        this._service.cargarImagenesFirebase(this.archivos);
    }

    limpiarArchivos() {
        this.archivos = [];
    }
}

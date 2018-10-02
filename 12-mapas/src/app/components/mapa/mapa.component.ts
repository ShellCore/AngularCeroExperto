import { Component, OnInit } from "@angular/core";
import { Marcador } from "../../classes/marcador.class";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: "app-mapa",
    templateUrl: "./mapa.component.html",
    styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
    
    marcadores: Marcador[] = [];

    lat = 19.399680115042337;
    lng = -99.1977643023767;

    constructor(public snackBar: MatSnackBar) {
        if (localStorage.getItem('marcadores')) {
            this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
        }
    }

    ngOnInit() { }

    agregarMarcador(evento) {
        const coords: { lat: number, lng: number } = evento["coords"];
        const m1 = new Marcador(coords.lat, coords.lng);
        this.marcadores.push(m1);
        this.guardarStorage();
        this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
    }

    guardarStorage() {
        localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    }

    borrarMarcador(i: number) {
        this.marcadores.splice(i, 1);
        this.guardarStorage();
        this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
    }
}

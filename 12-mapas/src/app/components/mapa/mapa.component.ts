import { Component, OnInit } from "@angular/core";
import { Marcador } from "../../classes/marcador.class";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
    const m1 = new Marcador(51.678418, 7.809007);

    this.marcadores.push(m1);
  }

  ngOnInit() {}

  agregarMarcador(evento) {
    const coords: {lat: number, lng: number} = evento["coords"];
    const m1 = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(m1);
  }
}

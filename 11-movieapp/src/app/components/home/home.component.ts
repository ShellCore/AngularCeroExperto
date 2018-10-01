import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    cartelera: any;
    populares: any;
    ninnos: any;

    constructor(
        public _service: MoviesService
    ) {
        this._service.getCartelera().subscribe(data => {
            this.cartelera = data;
        });
        this._service.getPopulares().subscribe(data => {
            this.populares = data;
        });
        this._service.getPopularesNinnos().subscribe(data => {
            this.ninnos = data;
        });
    }

    ngOnInit() {
    }

}

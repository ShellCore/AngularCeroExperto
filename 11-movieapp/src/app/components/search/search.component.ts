import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent implements OnInit {

    buscar: string = "";

    constructor(
        public _service: MoviesService
    ) { }

    ngOnInit() {
    }

    buscarPelicula() {
        if (this.buscar.length == 0) {
            return;
        }
        this._service.buscarPelicula(this.buscar)
            .subscribe(data => {
                console.log(data);
            });
    }

}

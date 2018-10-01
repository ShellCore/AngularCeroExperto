import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent implements OnInit {

    buscar: string = "";

    constructor(
        public _service: MoviesService,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            if (params['query']) {
                this.buscar = params['query'];
                this.buscarPelicula();
            }
        });
    }

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

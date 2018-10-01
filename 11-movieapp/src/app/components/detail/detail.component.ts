import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styles: []
})
export class DetailComponent implements OnInit {

    pelicula: any;

    constructor(
        public _service: MoviesService,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            this._service.getPelicula(params['id']).subscribe(pelicula => {
                this.pelicula = pelicula;
            });
        });
    }

    ngOnInit() {
    }

}

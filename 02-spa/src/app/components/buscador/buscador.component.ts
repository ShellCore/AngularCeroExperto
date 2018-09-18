import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

    heroes:Heroe[] = [];
    termino: string = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService
    ) {
     }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.termino = params['termino'];
            console.log(this.termino);

            this.heroes = this._heroesService.buscarHeroes(this.termino);
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

    heroes: Heroe[] = [];

    constructor(
        private _heroesService: HeroesService
    ) {
        console.log('Constructor');
    }

    ngOnInit() {
        console.log("ngOnInit");
        this.loadHeroes();
    }

    loadHeroes() {
        this.heroes = this._heroesService.getHeroes();
        console.log(this.heroes);
    }
}

import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styles: []
})
export class HeroesComponent implements OnInit {

    heroes: any[] = [];

    constructor(
        private _service: HeroesService
    ) {
        this._service.obtenerHeroes()
            .subscribe(data => {
                console.log(data);
                this.heroes = data;
            });
    }

    ngOnInit() {
    }

}

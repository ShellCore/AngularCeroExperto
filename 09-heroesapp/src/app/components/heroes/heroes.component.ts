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
    loading: boolean = true;

    constructor(
        private _service: HeroesService
    ) {
        this.obtenerHeroes();
    }

    ngOnInit() {
    }

    borrarHeroe(key$: string) {
        this._service.borrarHeroe(key$)
            .subscribe(data => {
                if (data) {
                    console.error(data);
                } else {
                    delete this.heroes[key$];
                }
            });
    }

    obtenerHeroes() {
        this._service.obtenerHeroes()
            .subscribe(data => {
                this.heroes = data;
                this.loading = false;
                // setTimeout(() => {
                //     this.heroes = data;
                //     this.loading = false;
                // }, 3000);
            });
    }
}

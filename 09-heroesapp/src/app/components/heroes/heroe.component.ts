import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: []
})
export class HeroeComponent implements OnInit {

    heroe: Heroe = {
        nombre: "",
        bio: "",
        casa: "Marvel"
    }

    id: string;

    constructor(
        private _service: HeroesService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(parametros => {
            this.id = parametros['id']
            if (this.id != 'nuevo') {
                this._service.obtenerHeroe(this.id)
                    .subscribe(data => {
                        this.heroe = data;
                    },
                    error => {
                        console.log(error);
                    });
            }
        });
    }

    ngOnInit() {
    }

    agregarNuevo(forma: NgForm) {
        this.router.navigate(['/heroe', 'nuevo']);
        forma.reset({
            casa: 'Marvel'
        });
    }

    guardar() {

        if (this.id == 'nuevo') {
            this._service.nuevoHeroe(this.heroe)
                .subscribe(data => {
                    this.router.navigate(['/heroe', data.name]);
                },
                error => {
                    console.error(error);
                });
        } else {
            this._service.actualizarHeroe(this.heroe, this.id)
                .subscribe(data => {
                    console.log(data);
                },
                error => {
                    console.error(error);
                });
        }


    }
}

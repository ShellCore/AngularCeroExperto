import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {

    firebaseUrl:string = "https://heroesapp-dddfb.firebaseio.com/heroes";
    firebaseUrlJson: string = '.json';

    constructor(private http: Http) { }

    nuevoHeroe(heroe: Heroe) {
        let body = JSON.stringify(heroe);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.firebaseUrl}${this.firebaseUrlJson}`
        return this.http.post(url, body, {headers})
            .pipe(map(res => {
                return res.json();
            }));
    }

    actualizarHeroe(heroe: Heroe, key$: string) {
        let body = JSON.stringify(heroe);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.firebaseUrl}/${key$}${this.firebaseUrlJson}`
        return this.http.put(url, body, {headers})
            .pipe(map(res => {
                return res.json();
            }));
    }

    obtenerHeroe(key$: string) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.firebaseUrl}/${key$}${this.firebaseUrlJson}`
        return this.http.get(url, {headers})
            .pipe(map(res => {
                return res.json();
            }));
    }

    obtenerHeroes() {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.firebaseUrl}${this.firebaseUrlJson}`
        return this.http.get(url, {headers})
            .pipe(map(res => {
                return res.json();
            }));
    }

    borrarHeroe(key$:string) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.firebaseUrl}/${key$}${this.firebaseUrlJson}`
        return this.http.delete(url, {headers})
            .pipe(map(res => {
                return res.json();
            }));
    }
}

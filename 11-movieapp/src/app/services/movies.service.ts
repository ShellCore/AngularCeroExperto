import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private apiKey = "c34ec9a13c2472d2b153cb43e7f5c4d5";
    private baseUrl = "https://api.themoviedb.org/3";
    private requiredParams = "language=es&callback=JSONP_CALLBACK"

    peliculas : any[] = [];

    constructor(
        private jsonp: Jsonp
    ) { }

    getCartelera() {
        let url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&${this.requiredParams}`;
        return this.jsonp.get(url).pipe(map(res => res.json().results));
    }

    getPopulares() {
        let url = `${this.baseUrl}/movie/popular?&api_key=${this.apiKey}&${this.requiredParams}`;
        return this.jsonp.get(url).pipe(map(res => res.json().results));
    }

    getPopularesNinnos() {
        let url = `${this.baseUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&${this.requiredParams}`;
        return this.jsonp.get(url).pipe(map(res => res.json().results));
    }

    buscarPelicula(query: string) {
        let url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=es&query=${query}&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url).pipe(map(res => {
            this.peliculas = res.json().results;
            return res.json().results;
        }));
    }

    getPelicula(id: string) {
        let url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&${this.requiredParams}`;
        return this.jsonp.get(url).pipe(map(res => res.json()));
    }
}

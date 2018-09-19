import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
        console.log("Spotify listo!");
    }

    getQuery(query: string) {
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQDYMxiFVLEsbrAJS_mkEJRKvL2HR9zCserKaiTbg6FtP6t_3JKpfZZLXUplxSKqSRMUCaGPVrr2kCYr-PI'
        });

        return this.http.get(url, {headers});
    }

    getNewReleases() {
        return this.getQuery("browse/new-releases?limit=20")
            .pipe(map(data => data['albums'].items));
    }

    searchArtist(termino: string) {
        // termino = encodeURI(termino);
        return this.getQuery(`search?q=${termino}&type=artist`)
            .pipe(map(data => data['artists'].items));
    }

    getArtist(id: string) {
        return this.getQuery(`artists/${id}`)
            .pipe(map(data => data));
    }
}

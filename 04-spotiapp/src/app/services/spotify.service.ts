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
            'Authorization': 'Bearer BQB5oHzuSnQ_CwFaeG9IF9elemzBuZcdcmGyQ7C0-pHnlEDa6Qk3X6t2fYW4XuTstQ707opKzY-hjn4bVp4'
        });

        return this.http.get(url, {headers});
    }

    getNewReleases() {
        return this.getQuery("browse/new-releases?limit=20")
            .pipe(map(data => data['albums'].items));
    }

    getArtist(termino: String) {
        return this.getQuery(`search?q=${termino}&type=artist&offset=15`)
            .pipe(map(data => data['artists'].items));
    }
}

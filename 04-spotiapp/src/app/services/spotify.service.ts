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
            'Authorization': 'Bearer QBt72yH-HjVRoeYgwv1vx7JoLWEG3-92RoymnpMKT8L_scJ9Ov5BGbzDtLGmMv1FftKr7LFWw8NdH76Pd4'
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

    getTopTracks(id: string) {
        return this.getQuery(`artists/${id}/top-tracks?country=US`)
            .pipe(map(data => data['tracks']));
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
        console.log("Spotify listo!");
    }

    getNewReleases() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQBH1L5mFQn38G6-sB7uU7Qddy58QpFffyEqOcnelZA_fvcJDrLcBwZOFOeDN7zOv5VeQVDkron0gd14eVM'
        });

        return this.http
            .get("https://api.spotify.com/v1/browse/new-releases", { headers });
    }

    getArtist(termino: String) {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQBH1L5mFQn38G6-sB7uU7Qddy58QpFffyEqOcnelZA_fvcJDrLcBwZOFOeDN7zOv5VeQVDkron0gd14eVM'
        });

        return this.http
            .get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&offset=15`, { headers });
    }
}

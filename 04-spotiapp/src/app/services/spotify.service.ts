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
            'Authorization': 'Bearer BQC_DbFU9CS0GN4VJSlWKHVFruIQycNPy6mhT449nW5ZIid0DnfTRtDbO14_pLVkrd0r4-VP-WBfnHLyBO8'
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

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
            'Authorization': 'Bearer BQAH_GYM874iCQ_y_G7Tq1xQ87BGmt-loY1zf-PfAR6stGTDEGY6QuBLFYXbt4niusTVGeQ6rOVZxrjaaxI'
        });

        return this.http
            .get("https://api.spotify.com/v1/browse/new-releases", { headers });
    }
}

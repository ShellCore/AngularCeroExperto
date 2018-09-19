import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styles: []
})
export class ArtistComponent implements OnInit {

    artista: any = {};
    loading: boolean;

    constructor(
        private router: ActivatedRoute,
        private spotify: SpotifyService
    ) {
        this.router.params.subscribe(params => {
            this.getArtista(params['id']);
        });
    }

    ngOnInit() {
    }

    getArtista(id: string) {
        this.loading = true;
        this.spotify.getArtist(id)
            .subscribe(artista => {
                this.artista = artista;
                this.loading = false;
            })
    }
}

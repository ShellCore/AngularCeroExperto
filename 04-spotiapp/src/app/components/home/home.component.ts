import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    nuevasCanciones: any[] = [];
    loading: boolean;
    error: boolean = false;
    errorMgs: string;

    constructor(
        private spotify: SpotifyService        
    ) {
        this.loading = true;
        this.spotify.getNewReleases()
            .subscribe((data: any) => {
                this.nuevasCanciones = data;
                this.loading = false;
            }, 
            (errorMessage) => {
                this.error = true;
                this.errorMgs = errorMessage.error.error.message;
                this.loading = false;
            });
    }

    ngOnInit() {
    }

}

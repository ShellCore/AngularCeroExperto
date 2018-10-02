import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

    baseUrl = "https://www.googleapis.com/youtube/v3";
    apiKey = "AIzaSyDSEjtK37VFiiBFqpixgxtrK6vCmT0S-IE";
    playlist = "UUz52C1ZeqTaOhM1FMRGMpzg";

    nextPageToken: string = "";



  constructor(public http: Http) { }

  getVideos() {
    let url = `${this.baseUrl}/playlistItems`;
    let params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playlist);
    params.set('key', this.apiKey);

    if (this.nextPageToken) {
        params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url, {search: params}).pipe(map(response => {
        this.nextPageToken = response.json()['nextPageToken'];

        let videos: any[] = [];
        for (let video of response.json()['items']) {
            let snippet = video['snippet'];
            videos.push(snippet);
        }

        return videos;
    }));
  }
}

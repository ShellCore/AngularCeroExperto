import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

    constructor(
        private sanitizer : DomSanitizer
    ) {

    }

  transform(value: string): any {
    let url = `https://www.youtube.com/embed/${value}?rel=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}

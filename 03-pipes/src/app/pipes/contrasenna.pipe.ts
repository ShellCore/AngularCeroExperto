import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenna'
})
export class ContrasennaPipe implements PipeTransform {

  transform(value: string, activated: boolean = true): string {
    
    let nombre = value;
    
    if (activated) {
        let pass = '';
        for (let i = 0; i < nombre.length; i++) {
            pass += '*';
        }
        nombre = pass;
    }
    
    return nombre;
  }
}

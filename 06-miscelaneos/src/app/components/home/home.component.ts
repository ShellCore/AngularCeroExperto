import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <app-ng-style></app-ng-style>
        
        <app-css></app-css>
        
        <p>Hola mundo desde app.component</p>
        <app-clases></app-clases>
        
        <p [appResaltado]="'orange'">
            Hola Mundo
        </p>
        <p appResaltado>
            Hola de nuevo
        </p>

        <app-ng-switch></app-ng-switch>
  `,
    styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { 
        console.log("constructor");
    }

    ngOnInit() {
        console.log("ngOnInit");
    }

    ngOnChanges(changes: import("/home/shell/Projects/Personal/Angular/06-miscelaneos/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
        console.log("ngOnChanges");
    }
    ngDoCheck(): void {
        console.log("ngDoCheck");
    }
    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }
    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }
    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }
    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }
    ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }
}

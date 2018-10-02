import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-mapa-editar',
    templateUrl: './mapa-editar.component.html',
    styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

    forma: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<MapaEditarComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.forma = formBuilder.group({
            'title': data.title,
            'desc': data.desc
        });
    }

    ngOnInit() {
    }

    guardarCambios() {
        this.dialogRef.close(this.forma.value);
    }

    onNoClick() {
        this.dialogRef.close();
    }
}

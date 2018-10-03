import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
    selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

    @Input() archivos: FileItem[] = [];
    @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    @HostListener('dragover', ['$event'])
    public onDragEnter(event: any) {
        this.mouseSobre.emit(true);
        this._preventStop(event);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: any) {
        this.mouseSobre.emit(false);
    }

    @HostListener('drop', ['$event'])
    public onDrop(event: any) {
        const transfer = this._getTransference(event);
        if (!transfer) {
            return;
        }
        this._extractFiles(transfer.files);
        this._preventStop(event);
        this.mouseSobre.emit(false);
    }

    private _getTransference(event: any) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }

    private _extractFiles(archivosLista: FileList) {
        for (const prop in Object.getOwnPropertyNames(archivosLista)) {
            const temp = archivosLista[prop];
            if (this._isFileUploadAvailable(temp)) {
                const newFile = new FileItem(temp);
                this.archivos.push(newFile);
            }
        }
        console.log(this.archivos);
    }

    // Validaciones
    private _preventStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    private _fileAlreadyDropped(nombreArchivo: string) : boolean {
        for (const archivo of this.archivos) {
            if (archivo.nombreArchivo == nombreArchivo) {
                console.log(`El archivo ${nombreArchivo} ya está agregado`);
                return true;
            }
        }
        return false;
    }

    private _isImage(tipoArchivo: string) : boolean {
        return (tipoArchivo == '' || tipoArchivo == undefined) ? false : tipoArchivo.startsWith('image');
    }

    private _isFileUploadAvailable(archivo: File) : boolean {
        if (!this._fileAlreadyDropped(archivo.name) && this._isImage(archivo.type)) {
            return true;
        } else {
            return false;
        }
    }
}

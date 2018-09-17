/**
 * Demostración de interfaces
 */

interface Xmen {
    nombre : string,
    poder : string
}

function enviarMision(xmen : Xmen) {
    console.log("Enviando a " + xmen.nombre);
}

let worlverine : Xmen = {
    nombre : "Wolverine",
    poder : "regeneración"
}

enviarMision(worlverine);
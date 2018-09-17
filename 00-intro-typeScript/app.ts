class Avenger {
    nombre : string;
    equipo : string;
    nombreReal : string;

    puedePelear : boolean = false;
    peleasGanadas : number = 0;

    constructor(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman : Avenger = new Avenger("Antman", "Capi", "Scott Lang");

console.log(antman);
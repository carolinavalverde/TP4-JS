class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaDePasajeros = [];
    }

    abordar(pasajero) {
        if (this.listaDePasajeros.length < this.capacidad) {
            this.listaDePasajeros.push(pasajero);
            console.log(`${pasajero} ha abordado el avión ${this.nombre}.`);
            document.write(`<p>${pasajero} ha abordado el avión ${this.nombre}.</p>`);
        } else {
            console.log(`¡Lo siento! El avión ${this.nombre} está lleno. No se puede abordar.`);
            document.write(`<p>¡Lo siento! El avión ${this.nombre} está lleno. No se puede abordar.</p>`);
        }
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion);
        console.log(`Avión ${avion.nombre} agregado al aeropuerto.`);
    }

    buscarAvion(nombreAvion) {
        const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
        if (avionEncontrado) {
            console.log(`Información del avión ${nombreAvion}:`);
            console.log(`- Capacidad: ${avionEncontrado.capacidad}`);
            console.log(`- Destino: ${avionEncontrado.destino}`);
            console.log(`- Pasajeros a bordo: ${avionEncontrado.listaDePasajeros.join(', ') || 'Ninguno'}`);
        } else {
            console.log(`No se encontró un avión con el nombre ${nombreAvion}.`);
        }
    }
}

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion(
    "Vuelo1", 
    100, 
    "Edimburgo"
    );

const avion2 = new Avion(
    "Vuelo2", 
    150, 
    "Buenos Aires"
    );

const avion3 = new Avion(
    "Vuelo3", 
    150, 
    "Moscú"
    );

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

const nombreAvionABuscar = "Vuelo2";
aeropuertoInternacional.buscarAvion(nombreAvionABuscar);

const pasajero1 = "Pasajero1";
avion2.abordar(pasajero1);

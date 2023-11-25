class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log("Sonido emitido.");
  }

mostrarDatos() {
    document.write(`<h2>Animal: ${this.nombre}</h2>
    <ul>
    <li>Edad: ${this.edad}</li>
    <li>Raza: ${this.raza}</li>
    <li>Color: ${this.color}</li>
    </ul>`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza, color) {
    super(nombre, edad);
    this.raza = raza;
    this.color = color;
    this.sonido = "¡Guau!";
  }

  emitirSonido() {
    console.log(`${this.nombre}: ${this.sonido}`);
    document.write(`<p>${this.nombre} hace ${this.sonido}</p>`);
  }
}

class Gato extends Animal {
  constructor(nombre, edad, raza, color) {
    super(nombre, edad);
    this.raza = raza;
    this.color = color;
    this.sonido = "¡Miau!";
  }

  emitirSonido() {
    console.log(`${this.nombre}: ${this.sonido}`);
    document.write(`<p>${this.nombre} hace ${this.sonido}</p>`);
  }
}

const perro = new Perro(
    "Thor", 
    3, 
    "Labrador",
    "Beige"
    );

const gato = new Gato(
    "Loki", 
    2, 
    "Calle con vereda",
    "Negro"
    );

perro.mostrarDatos();

perro.emitirSonido();

gato.mostrarDatos();

gato.emitirSonido();

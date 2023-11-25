class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    console.log(
      `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`
    );
    document.write(
      `<p> _ Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.</p><br>`
    );
  }

  despedirse() {
    console.log(`Chau, nos vemos después.`);
    document.write(`<p> _ Chau, nos vemos después.</p><br>`);
  }
}

function obtenerDatos() {
  const nombre = prompt("Ingrese nombre:");
  const edad = parseInt(prompt("Ingrese edad:"));
  const profesion = prompt("Ingrese profesión:");
  return new Persona(nombre, edad, profesion);
}

const persona1 = obtenerDatos();

const persona2 = obtenerDatos();

persona1.saludar();

persona2.saludar();

persona1.despedirse();

persona2.despedirse();

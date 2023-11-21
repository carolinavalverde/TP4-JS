class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarPropiedades = (nuevoAlto, nuevoAncho) => {
    this.alto = nuevoAlto;
    this.ancho = nuevoAncho;
  };

  mostrarPropiedades = () => {
    document.write(
      `<h1>Rectángulo:</h1> Alto = ${this.alto}, Ancho = ${this.ancho}<br>`
    );
  };

  calcularPerimetro = () => 2 * (this.alto + this.ancho);

  calcularArea = () => this.alto * this.ancho;
}

const rectangulo1 = new Rectangulo(11, 6);

document.write("<h1>Propiedades del Rectángulo 1:</h1><br>");
rectangulo1.mostrarPropiedades();
document.write(
  `<p>Perímetro del Rectángulo 1:</p> ${rectangulo1.calcularPerimetro()}<br>`
);
document.write(
  `<p>Área del Rectángulo 1:</p> ${rectangulo1.calcularArea()}<br><br>`
);

const rectangulo2 = new Rectangulo(
  parseFloat(prompt("Ingrese la altura del Rectángulo 2:")),
  parseFloat(prompt("Ingrese el ancho del Rectángulo 2:"))
);
const rectangulo3 = new Rectangulo(
  parseFloat(prompt("Ingrese la altura del Rectángulo 3:")),
  parseFloat(prompt("Ingrese el ancho del Rectángulo 3:"))
);

document.write("<h1>Propiedades del Rectángulo 2:</h1><br>");
rectangulo2.mostrarPropiedades();
document.write(
  `<p>Perímetro del Rectángulo 2:</p> ${rectangulo2.calcularPerimetro()}<br>`
);
document.write(
  `<p>Área del Rectángulo 2:</p> ${rectangulo2.calcularArea()}<br><br>`
);

document.write("<h1>Propiedades del Rectángulo 3:</h1><br>");
rectangulo3.mostrarPropiedades();
document.write(
  `<p>Perímetro del Rectángulo 3:</p> ${rectangulo3.calcularPerimetro()}<br>`
);
document.write(
  `<p>Área del Rectángulo 3:</p> ${rectangulo3.calcularArea()}<br>`
);

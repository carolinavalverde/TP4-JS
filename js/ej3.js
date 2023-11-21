class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

const rectangulo1 = new Rectangulo(
    2,
    4,
  );
  console.log(rectangulo1);
  document.write("<h1>Propiedades del Rectángulo 1:</h1><br>");

  document.write(
    "<h2>Perímetro del Rectángulo 1:</h2>" +
      rectangulo.calcularPerimetro(rectangulo1) +
      "<br>"
  );
  document.write(
    "<h2>Área del Rectángulo:</h2> " + rectangulo.calcularArea() + "<br>"
  );
  

  cambiarMedidas = () => {
    const nuevoAlto = parseFloat(
      prompt("Ingrese la altura del rectángulo:")
    );
    const nuevoAncho = parseFloat(
      prompt("Ingrese el ancho del rectángulo:")
    );

    if (
      !isNaN(nuevoAlto) &&
      !isNaN(nuevoAncho) &&
      nuevoAlto > 0 &&
      nuevoAncho > 0
    ) {
      this.alto = nuevoAlto;
      this.ancho = nuevoAncho;
      console.log("Medidas modificadas");
    } else {
      console.log("Poner un nro válido");
    }
  };

  mostrarMedidas = () => {
    console.log(`Rectángulo: Alto = ${this.alto}, Ancho = ${this.ancho}`);
  };

  calcularPerimetro = () => 2 * (this.alto + this.ancho);

  calcularArea = () => this.alto * this.ancho;
}

const rectangulo = new Rectangulo(0, 0);

rectangulo.cambiarMedidas();

console.log("Propiedades del Rectángulo:");
rectangulo.mostrarMedidas();
console.log("Perímetro del Rectángulo:", rectangulo.calcularPerimetro());
console.log("Área del Rectángulo:", rectangulo.calcularArea());

document.write("<h1>Propiedades del Rectángulo:</h1><br>");
rectangulo.mostrarMedidas();
document.write(
  "<h2>Perímetro del Rectángulo:</h2> " +
    rectangulo.calcularPerimetro() +
    "<br>"
);
document.write(
  "<h2>Área del Rectángulo:</h2> " + rectangulo.calcularArea() + "<br>"
);

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioDeNacimiento = anioDeNacimiento;
    this.dni = dni;
  }

  mostrarGeneracion() {
    const { nombre, anioDeNacimiento } = this;
    let generacion, rasgoCaracteristico;

    switch (true) {
      case anioDeNacimiento >= 1930 && anioDeNacimiento <= 1948:
        generacion = "Silent Generation";
        rasgoCaracteristico = "Austeridad";
        break;
      case anioDeNacimiento >= 1949 && anioDeNacimiento <= 1968:
        generacion = "Baby Boom";
        rasgoCaracteristico = "Ambición";
        break;
      case anioDeNacimiento >= 1969 && anioDeNacimiento <= 1980:
        generacion = "Generación X";
        rasgoCaracteristico = "Obseción por el éxito";
        break;
      case anioDeNacimiento >= 1981 && anioDeNacimiento <= 1993:
        generacion = "Generación Y";
        rasgoCaracteristico = "Frustración";
        break;
      case anioDeNacimiento >= 1994 && anioDeNacimiento <= 2010:
        generacion = "Generación Z";
        rasgoCaracteristico = "Irreverencia";
        break;
      default:
        generacion = "Generación Alpha";
        rasgoCaracteristico = "Nativos digitales";
        break;
    }

    console.log(
      `${nombre} pertenece a la generación ${generacion}. Rasgo característico: ${rasgoCaracteristico}.`
    );
    document.write(`<p>
      ${nombre} pertenece a la generación ${generacion}. Rasgo característico: ${rasgoCaracteristico}.
   </p>`);
  }

  esMayorDeEdad() {
    const mensaje =
      this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    console.log(mensaje);
    document.write(mensaje);
  }

  mostrarDatos() {
    const { nombre, edad, sexo, peso, altura, anioDeNacimiento, DNI } = this;
    console.log(`
    Nombre: ${nombre}
    Edad: ${edad} años
    Sexo: ${sexo}
    Peso: ${peso} kg
    Altura: ${altura} m
    Año de Nacimiento: ${anioDeNacimiento}
    DNI: ${DNI}
  `);
    document.write(`<ul>
    <li>Nombre: ${nombre}</li>
    <li>Edad: ${edad} años</li>
    <li>Sexo: ${sexo}</li>
    <li>Peso: ${peso} kg</li>
    <li>Altura: ${altura} m</li>
    <li>Año de Nacimiento: ${anioDeNacimiento}</li>
    <li>DNI: ${DNI}</li>
    </ul>`);
  }

  generaDNI() {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
  }
}

const bruceWayne = new Persona(
  `Bruce Wayne`, 
  35, 
  `M`, 
  90, 
  1.85, 
  1985, 
  20444555
  );

bruceWayne.mostrarGeneracion();
bruceWayne.esMayorDeEdad();
bruceWayne.mostrarDatos();

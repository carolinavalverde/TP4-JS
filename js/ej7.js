class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  esIgual(otroContacto) {
    return this.nombre === otroContacto.nombre;
  }
}

class AgendaTelefonica {
  constructor(tamanio = 10) {
    this.tamanioMaximo = tamanio;
    this.contactos = [];
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena. No se pueden añadir más contactos.");
    } else if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe en la agenda.");
    } else {
      this.contactos.push(contacto);
      console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
    }
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.esIgual(contacto));
  }

  listarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach((contacto) => {
      console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    });
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
    } else {
      console.log(`No se encontró el contacto ${nombre} en la agenda.`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex((c) => c.esIgual(contacto));
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
    } else {
      console.log(
        `No se encontró el contacto ${contacto.nombre} en la agenda.`
      );
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamanioMaximo;
  }

  huecosLibres() {
    return this.tamanioMaximo - this.contactos.length;
  }
}

function menu() {
  const agenda = new AgendaTelefonica();

  while (true) {
    const opcion = prompt(`
        Menú:
        1. Añadir contacto
        2. Buscar contacto
        3. Eliminar contacto
        4. Listar contactos
        5. Huecos libres
        6. Salir
  
        Ingresa el número de la opción que deseas:`);

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingresa el nombre del contacto:");
        const telefono = prompt("Ingresa el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;

      case "2":
        const nombreBuscar = prompt("Ingresa el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;

      case "3":
        const nombreEliminar = prompt(
          "Ingresa el nombre del contacto a eliminar:"
        );
        const contactoEliminar = new Contacto(nombreEliminar, ""); // Crear un contacto temporal solo con el nombre
        agenda.eliminarContacto(contactoEliminar);
        break;

      case "4":
        agenda.listarContactos();
        break;

      case "5":
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;

      case "6":
        console.log("Saliendo del programa.");
        return;

      default:
        console.log(
          "Opción no válida. Por favor, ingresa un número del 1 al 6."
        );
        break;
    }
  }
}

menu();

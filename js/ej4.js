class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarDatos() {
    document.write(
      `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}<br>`
    );
  }
}

const producto1 = new Producto("001", "Producto 1", 50);

document.write("<h1>Datos de producto1:</h1><br>");
producto1.mostrarDatos();

const nuevosProductos = [];
const cantidadNuevosProductos = parseInt(
  prompt("Ingrese la cantidad de nuevos productos:")
);

for (let i = 0; i < cantidadNuevosProductos; i++) {
  const codigo = prompt(`Ingrese el código del producto ${i + 2}:`);
  const nombre = prompt(`Ingrese el nombre del producto ${i + 2}:`);
  const precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 2}:`));

  const nuevoProducto = new Producto(codigo, nombre, precio);
  nuevosProductos.push(nuevoProducto);
}

document.write("<br><h1>Datos de nuevos productos:</h1><br>");
for (const producto of nuevosProductos) {
  producto.mostrarDatos();
}

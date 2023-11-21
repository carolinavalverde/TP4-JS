const auto = {
  color: `negro`,
  marca: `lamborghini`,
  modelo: `murciélago`,
  encendido: true,

  encender: function () {
    if (this.encendido) {
      this.encendido = true;
      console.log(`El ${auto.marca} ${auto.modelo} se encendió.`);
    }
  },

  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log(`El ${auto.marca} ${auto.modelo} se apagó.`);
    }
  },
};

auto.encender();
auto.apagar();

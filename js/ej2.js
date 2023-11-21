const cuenta = {
  titular: "Bruce Wayne",
  saldo: 0,

  ingresar: () => {
    const cantidad = parseFloat(prompt("Ingrese la cantidad a depositar:"));
    if (!isNaN(cantidad) && cantidad > 0) {
      cuenta.saldo += cantidad;
      console.log(
        `Se ingresaron ${cantidad} pesos. Su saldo actual es de ${cuenta.saldo} pesos.`
      );
    } else {
      console.log("La cantidad ingresada no es válida.");
    }
  },

  extraer: () => {
    const cantidad = parseFloat(prompt("Ingrese la cantidad a retirar:"));
    if (!isNaN(cantidad) && cantidad > 0 && cantidad <= cuenta.saldo) {
      cuenta.saldo -= cantidad;
      console.log(
        `Se extrajeron ${cantidad} pesos. Su saldo actual es de ${cuenta.saldo} pesos.`
      );
    } else {
      console.log(
        "La cantidad a retirar no es válida o excede el saldo disponible."
      );
    }
  },

  informar: () => {
    console.log(
      `Titular de la cuenta: ${cuenta.titular}, Saldo Actual: ${cuenta.saldo} pesos.`
    );
  },
};

cuenta.informar();

cuenta.ingresar();

cuenta.extraer();

cuenta.informar();

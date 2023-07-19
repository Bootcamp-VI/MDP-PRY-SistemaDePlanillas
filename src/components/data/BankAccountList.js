export const BankAccountList = [
  {
    codigo: "001",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Continental",
    moneda: "Soles",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: true,
  },
  {
    codigo: "002",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Interbank",
    moneda: "Dolares",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: false,
  },
  {
    codigo: "001",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Continental",
    moneda: "Soles",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: true,
  },
  {
    codigo: "002",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Interbank",
    moneda: "Dolares",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: false,
  },
  {
    codigo: "001",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Continental",
    moneda: "Soles",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: true,
  },
  {
    codigo: "002",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Interbank",
    moneda: "Dolares",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: false,
  },
  {
    codigo: "001",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Continental",
    moneda: "Soles",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: true,
  },
  {
    codigo: "002",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Interbank",
    moneda: "Dolares",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: false,
  },
  {
    codigo: "001",
    tipoProceso: "todos",
    tipoPago: "Abono en Cuenta",
    banco: "Continental",
    moneda: "Soles",
    tipoCuenta: "Ahorro",
    numeroCuenta: "Aperturar",
    proceso: true,
  },
];

export function getKeyArray(objectsArray) {
  if (objectsArray.length === 0) {
    return [];
  }

  const keys = Object.keys(objectsArray[0]);
  const result = separateByUppercase(keys);

  return result;
}

function separateByUppercase(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("El argumento debe ser un arreglo.");
  }

  const result = arr.map((item) => {
    return item
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  });

  return result;
}

// Ejemplo de uso:
const keys = getKeyArray(BankAccountList);
console.log(keys);

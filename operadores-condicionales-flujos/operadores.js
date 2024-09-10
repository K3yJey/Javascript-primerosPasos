//Operadores de comparación
const ciudadDestino = "Lima";
const ciudadesLista = new Array("Lima", "Piura", "Cajamarca");

/*if (ciudadesLista.indexOf(ciudadDestino) >= 0) {
    console.log(`La ciudad ${ciudadDestino} está en la lista de ciudades`);
} else {
    console.log(`La ciudad ${ciudadDestino} no está en la lista de ciudades`);
}*/

//Operador estricto de comparación, también compara el tipo de dato
const valorPasaje = 1000;

/*if (valorPasaje === "1000") {
    console.log(`Los valores son iguales`);
} else {
    console.log(`Los valores no son iguales`);
}*/

//Operadores Lógicos: AND && / OR || / NOT !
let edadPasajero = 19;

/*if ((ciudadesLista.indexOf(ciudadDestino) >= 0) && edadPasajero >= 18) {
    console.log(`Ciudad disponible para viajar`);
} else {
    console.log(`Ciudad no disponible para viajar`);
}*/

//If encadenados
if (ciudadesLista.indexOf(ciudadDestino) >= 0) {
  if (edadPasajero >= 18) {
    console.log(`Ciudad disponible para viajar`);
  } else {
    console.log(`Ciudad no disponible para viajar`);
  }
} else {
  console.log(`Ciudad no disponible para viajar`);
}

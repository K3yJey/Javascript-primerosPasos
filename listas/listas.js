//Definición de lista de forma larga
const ciudadesLista = new Array("Lima", "Piura", "Cajamarca");

console.log(ciudadesLista);

//Definición de lista de forma abreviada
const paisesLista = ["Perú", "Colombia", "Brasil"];

console.log(paisesLista);

//Agregar al final
ciudadesLista.push("Loreto");
paisesLista.push("Argentina");

//console.log(`Método Push: ${ciudadesLista}`);
//console.log(`Método Push: ${paisesLista}`);

//Agregar al inicio
ciudadesLista.unshift("Sullana");
paisesLista.unshift("Ecuador");

//console.log(`Método Unshift: ${ciudadesLista}`);
//console.log(`Método Unshift: ${paisesLista}`);

//Eliminar último
ciudadesLista.pop();
paisesLista.pop();

//console.log(`Método Pop: ${ciudadesLista}`);
//console.log(`Método Pop: ${paisesLista}`);

//Eliminar primero
ciudadesLista.shift();
paisesLista.shift();

//console.log(`Método Shift: ${ciudadesLista}`);
//console.log(`Método Shift: ${paisesLista}`);

//Imprimir posición de Array
//console.log(`Posición 01: ${ciudadesLista[1]}`);
//console.log(`Posición 00: ${paisesLista[0]}`);

//Filtrar elementos del Array 
//console.log(ciudadesLista.filter((e) => e == "Lima"));

//Añadir un caracter entre elementos
//console.log(paisesLista.join("-"));

//Ordenar la lista
//console.log(ciudadesLista.sort());

//Conocer la posición del elemento
//console.log(`Posición de Perú: ${paisesLista.indexOf("Perú")}`);

//Concatenar listas
console.log(ciudadesLista.concat(paisesLista));
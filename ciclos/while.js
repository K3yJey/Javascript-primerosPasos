const ciudadesLista = new Array("Lima", "Piura", "Cajamarca", "Sullana");
const precioCiudad = new Array("500", "400", "300", "200");
const presupuestoDisponible = 390;
let i = 0;

//While: 0 a más veces
while (precioCiudad[i] > presupuestoDisponible) {
    i++;
}
console.log(`Puedes comprar pasaje para ${ciudadesLista[i]}`);

//Do-While: 1 a más veces
do {
    i++;
} while (precioCiudad[i] > presupuestoDisponible);
console.log(`Puedes comprar pasaje para ${ciudadesLista[i]}`);
const ciudadDestino = "Lima";
const ciudadesLista = new Array("Lima", "Piura", "Cajamarca");
let edadPasajero = 18;
let acompañado = false;

if (ciudadesLista.indexOf(ciudadDestino) >= 0 && edadPasajero >= 18 || acompañado == true) {
    console.log(`Si puede viajar`);
} else {
    console.log(`No puede viajar`);
}
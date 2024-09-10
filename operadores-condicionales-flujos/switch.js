const ciudadDestino = "Piura";
let valorPasaje = 0;

switch (ciudadDestino) {
  case "Bogotá":
    valorPasaje = 500;
    break;
  case "Lima":
    valorPasaje = 600;
    break;
  case "Piura":
    valorPasaje = 700;
    break;
  case "Cajamarca":
    valorPasaje = 800;
    break;
  default:
    valorPasaje = 0;
    break;
}
console.log(
  `El valor del pasaje para la ciudad ${ciudadDestino} es: ${valorPasaje}`
);

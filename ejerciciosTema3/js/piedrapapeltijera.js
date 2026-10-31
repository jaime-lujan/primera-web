let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function jugar(jugador) {
  const opciones = ["piedra", "papel", "tijera"];
  const maquina = opciones[Math.floor(Math.random() * opciones.length)];
  let mensaje;

  partidas++;

  if (jugador === maquina) {
    mensaje = "Empate";
    empatadas++;
  } else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "tijera" && maquina === "papel") ||
    (jugador === "papel" && maquina === "piedra")
  ) {
    mensaje = "Ganaste";
    ganadas++;
  } else {
    mensaje = "Perdiste";
    perdidas++;
  }

  document.getElementById("jugada-jugador").textContent =
    `Tu elección: ${jugador}`;
  document.getElementById("jugada-maquina").textContent =
    `Elección maquina: ${maquina}`;
  document.getElementById("mensaje").textContent = mensaje;

  document.getElementById("marcador").textContent =
    `Partidas jugadas: ${partidas}`;
  document.getElementById("ganadas").textContent = `Ganadas: ${ganadas}`;
  document.getElementById("empatadas").textContent = `Empates: ${empatadas}`;
  document.getElementById("perdidas").textContent = `Derrotas: ${perdidas}`;
}

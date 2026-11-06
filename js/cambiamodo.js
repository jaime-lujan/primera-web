// hojas de estilo de cada modo (se marcan con class en el HTML)
const hojasClaras = document.querySelectorAll(".tema-claro");
const hojasOscuras = document.querySelectorAll(".tema-oscuro");
 
// activa las hojas de un modo y desactiva las del otro
function aplicarModo(claro) {
    for (const hoja of hojasClaras) {
        hoja.disabled = !claro;
    }
    for (const hoja of hojasOscuras) {
        hoja.disabled = claro;
    }
}
 
// al cargar cada página: aplicar el modo guardado (por defecto, oscuro)
let modoClaro = localStorage.getItem("modo") === "claro";
aplicarModo(modoClaro);
 
function cambiarModo() {
    modoClaro = !modoClaro;
    aplicarModo(modoClaro);
    localStorage.setItem("modo", modoClaro ? "claro" : "oscuro");
}
const mensaje = document.getElementById("ip");

function mostrarDireccionRed(){
mensaje.textContent = "192.168.1.0"
}

function mostrarPuertaEnlace(){
mensaje.textContent = "192.168.1.1"
}

function generarIP(){
let ip = Math.floor(Math.random() * 253) + 2.
mensaje.textContent = "192.168.1." + ip

}

function mostrarBroadcast(){
mensaje.textContent = "192.168.1.255"
}

function mostrarMascara(){
mensaje.textContent = "255.255.255.0"
}


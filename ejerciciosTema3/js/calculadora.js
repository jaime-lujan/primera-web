function escribir(valor) {
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value == "0") {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

// BOTÓN %
function porcentaje() {
    let pantalla = document.getElementById("pantalla");
    let valor = Number(pantalla.value);

    if (pantalla.value === "Error" || Number.isNaN(valor)) {
        pantalla.value = "Error";
        return;
    }

    pantalla.value = String(valor / 100);
}

// BOTÓN =
function calcular() {
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value === "" || pantalla.value === "Error") {
        pantalla.value = "0";
        return;
    }

    try {
        let expresion = pantalla.value.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
        pantalla.value = eval(expresion);

    } catch (error) {
        pantalla.value = "Error";
    }
}

// BOTÓN C
function borrarTodo() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}

// BOTÓN CE
function borrarNumero() {
    let pantalla = document.getElementById("pantalla");
    let texto = pantalla.value;
    let i = texto.length;

    while (i > 0) {
        i--;
    }

    pantalla.value = texto.slice(0, i) || "0";
}

// BOTÓN DEL
function borrarUltimo() {
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value == "Error" || pantalla.value.length <= 1) {
        pantalla.value = "0";
    } else {
        pantalla.value = pantalla.value.slice(0, -1);
    }
}
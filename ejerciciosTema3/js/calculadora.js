function escribir(valor) {

    let pantalla = document.getElementById("pantalla");

    if (pantalla.value== "0"){
        pantalla.value = valor;
    }

    else {
        pantalla.value += valor;
    }
}

function calcular() {

    let pantalla = document.getElementById("pantalla");
    pantalla.value = eval(pantalla.value)
}

// BOTÓN C
function borrarTodo(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}

// BOTÓN CE
function borrarNumero() {
    let pantalla = document.getElementById("pantalla");
    let texto = pantalla.value;
    let i = texto.length;
 
    while (i > 0 && !operadores.includes(texto[i - 1])) {
        i--;
    }
 
    pantalla.value = texto.slice(0, i) || "0";
    resultadoMostrado = false;
}

// BOTÓN DEL
function borrarUltimo() {
    let pantalla = document.getElementById("pantalla");
 
    if (pantalla.value == "Error" || pantalla.value.length <= 1) {
        pantalla.value = "0";
    } else {
        pantalla.value = pantalla.value.slice(0, -1);
    }
    resultadoMostrado = false;
}
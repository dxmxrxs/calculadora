function agregarValor(valor) {
    document.getElementById("display").value += valor;
}

function limpiar() {
    document.getElementById("display").value = "";
}

function borrar() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function calcular() {
    let display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

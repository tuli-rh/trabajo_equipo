/* 
Ejercicio 1: Función con validación de datos
Objetivo: Validar entradas antes de procesarlas.
Instrucciones:
Crea un input donde el usuario escriba un número.
Crea una función verificarNumero.
La función debe:
Capturar el valor del input
Verificar si está vacío
Si está vacío → mostrar: "Debes ingresar un número"
Si tiene valor → mostrar: "Número ingresado correctamente"
*/

function verificarNumero() {
    const container = document.getElementById("resultado-container1");
    const result1 = document.getElementById("result1");
    const input = document.getElementById("input1");

    const valor = Number(input.value); 


    if (valor === "" ) {
        result1.textContent = "Debes ingresar un número";
    } else{
        result1.textContent = "Número ingresado correctamente";
    }
    
    container.classList.remove("d-none");
    input.value = "";
}



/* Ejercicio 2: Función que usa condicional múltiple
Objetivo: Aplicar lógica con múltiples condiciones.

Instrucciones:

Crea un input para ingresar una nota (1.0 a 7.0).
Crea una función evaluarNota.
La función debe:
Convertir el valor a número
Mostrar en pantalla:
"Reprobado" si es menor a 4.0
"Aprobado" si está entre 4.0 y 5.9
"Sobresaliente" si es 6.0 o más}
*/

function evaluarNota(){
    const input = document.getElementById()
}

/*Ejercicio 3: Uso de múltiples funciones (flujo completo)
Objetivo: Integrar varias funciones con roles distintos.

Instrucciones:

Crea dos funciones ayudantes:
function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}
Crea una función principal procesarNumero que:
Capture un número desde un input
Llame a ambas funciones
Muestre en pantalla:
Cuadrado: X
Triple: Y*/
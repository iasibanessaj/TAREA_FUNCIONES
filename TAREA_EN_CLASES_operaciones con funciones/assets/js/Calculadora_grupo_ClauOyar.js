// Función para sumar
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para restar
function restar(num1, num2) {
    return num1 - num2;
}

// Función para multiplicar
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Función para dividir
function dividir(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir por cero.";
    } else {
        return num1 / num2;
    }
}

// Función para obtener el número del usuario
function obtenerNumero(mensaje) {
    return parseInt(prompt(mensaje));
}

// Función para obtener la operación
function obtenerOperacion() {
    return prompt("¿Qué operación te gustaría realizar?\nEscribe uno de los siguientes símbolos: +, -, *, /");
}

// Función principal de la calculadora
function calculadora() {
    var continuar;

    do {
        // Obtener el primer número
        var num1 = obtenerNumero("¡Hola! Bienvenido a la calculadora básica.\nPor favor, ingresa el primer número:");

        // Obtener la operación
        var operacion = obtenerOperacion();

        // Obtener el segundo número
        var num2 = obtenerNumero("Ahora, ingresa el segundo número:");

        // Variable para almacenar el resultado
        var resultado;

        // Uso de switch para determinar la operación a realizar
        switch (operacion) {
            case "+":
                resultado = sumar(num1, num2);
                break;
            case "-":
                resultado = restar(num1, num2);
                break;
            case "*":
                resultado = multiplicar(num1, num2);
                break;
            case "/":
                resultado = dividir(num1, num2);
                break;
            default:
                resultado = "Operación no válida. Por favor, elige una operación correcta.";
                break;
        }

        // Mostrar el resultado
        alert("El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + resultado);

        // Preguntar si desea realizar otra operación
        continuar = prompt("¿Deseas realizar otra operación? (s/n)").toLowerCase();

    } while (continuar === "s");
}

// Llamar a la función principal para ejecutar la calculadora
calculadora();
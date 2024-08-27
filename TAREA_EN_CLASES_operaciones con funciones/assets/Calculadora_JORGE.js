function preguntarNums() {
    let num1, num2;
    do {
         num1 = parseInt(prompt('Ingrese el primer número:'));
         num2 = parseInt(prompt('Ingrese el segundo número:'));
        //Valida si el valor ingresado sea un número
        if (validarNum(num1) && validarNum(num2)) {
            num1Val += num1;
            num2Val += num2;
        } else {
            alert('Valor ingresado no es un Número entero')
        }
    } while (!validarNum(num1) || !validarNum(num2));
}

function validarNum(num) {
    return Number.isInteger(num);
}



//esta es mi función principal
function menuCalc() {

    let continuar = true;

    //continuar comienza como true, declarado así en la línea 3
    //para salir del ciclo continuar debe ser falso, y debe cambiar dentro del ciclo while
    while (continuar) {

        let option = parseInt(prompt("Seleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"));

        //si option está entre 1 y 4 se ejecuta
        if (option >= 1 && option <= 4) {
            const num1 = parseInt(prompt("Ingrese el primer número:"));
            const num2 = parseInt(prompt("Ingrese el segundo número"));

            let resultado;

            switch (option) {
                case 1:
                    resultado = suma(num1, num2)
                    alert(`El resultado de la suma es ${resultado}`)
                    break;
                case 2:
                    resultado = resta(num1, num2);
                    alert(`El resultado de la resta es ${resultado}`);
                    break;
                case 3:
                    resultado = multiplica(num1, num2);
                    alert(`El resultado de la multiplicación es ${resultado}`);
                    break;
                case 4:
                    resultado = divide(num1, num2);                    
                    break;
                default:
                    //en este caso, el default no hace nada y podría quitarlo
                    break;
            }
        } else if (option == 5) {
            //esta es nuestra variable de control, al cambiar de true a false permite salir del ciclo
            continuar = false;
            alert("Gracias por usar la calculadora")
        } else {
            alert("Seleccione una opción válida (1-5)")
        }
    }

}

function suma(a, b) {
    const suma = a + b
    return suma
}

function resta(a, b) {
    const resta = a - b;
    return resta
}

function multiplica(a, b) {
    const multiplica = a * b;
    return multiplica
}

function divide(a, b) {
    if (b == 0) {
        alert("La división por 0 es indeterminada")
        return null
    }
    else {
        const divide = a / b;
        alert(`El resultado de la división es ${divide}`);
    }
}

//acá llamo a la función principal y permite su ejecución
menuCalc()
 
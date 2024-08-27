menu();

function menu() {
  var continuar = null;
  do {
    continuar = false;
    var valor1 = parseInt(prompt("Ingrese el primer valor:"));
    var valor2 = parseInt(prompt("Ingrese el segundo valor:"));

    if (validarValores(valor1, valor2)) {
      alert("Algún de los valores ingresados son incorrectos.");
      continuar = true;
      continue;
    }

    var operadorIncorrecto = false;
    do {
      var operacion = prompt("Ingrese la operación:\n+ \n- \n/ \n*").trim(); // "+  "  = "+"
      if (!validarOperacion(operacion)) {
        alert("Operador incorrecto.");
        operadorIncorrecto = true;
      } else {
        operadorIncorrecto = false;
      }
    } while (operadorIncorrecto);

    var resultado = calcular(valor1, valor2, operacion);

    alert(`${valor1} ${operacion} ${valor2} = ${resultado}`);

    var otroCalculo = prompt("Quiere realizar otra operación:\nSI. \nNO.");

    if (otroCalculo.trim().toUpperCase() == "SI") { // "SI" == "SI"
      continuar = true;
    }
  } while (continuar);
}

function validarValores(valor1, valor2) {
  if (isNaN(valor1) || isNaN(valor2)) {
    return true;
  }
  return false;
}

function validarOperacion(operacion) {
  return ["+", "-", "/", "*"].includes(operacion);
}

function calcular(valor1, valor2, operacion) {
  let resultado;

  switch (operacion) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      if (valor2 != 0) {
        resultado = valor1 / valor2;
      } else {
        resultado = "Error: División por cero";
      }
      break;
    default:
      resultado = "Operación no válida";
  }

  return resultado;
}
 
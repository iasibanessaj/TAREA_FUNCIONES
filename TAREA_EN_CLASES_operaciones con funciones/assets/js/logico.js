// Operaciones Basicas co Funciones  +, -, *, /
// primero un menu , ono?


var num1 = parseInt(prompt('Ingresa un numero ENTERO'));
var num2 = parseInt(prompt('Ingresa un numero ENTERO'));



// F SUMA
function sumar (num1, num2){     
    return  num1 + num2;    
 }

 // F SUSTRAE
function restar (num1, num2){     
    return  num1 - num2;    
 }

 //F Multiplica
 function multi (num1, num2){
        return num1 * num2;
     }





var opera = prompt("BIENBENIDO A BANCA NUESTRO   \nElija El Calculo a realizar \n+ (sumar) \n- (restar)");
switch (opera) {

    case "+":
        alert(`La suma es: ${sumar(num1, num2)}`);
        break;

    case "-":
        alert(`La resta es: ${restar(num1, num2)}`);
        break;

    case "*":
        alert(`La resta es: ${multi(num1, num2)}`);
        break;    

 }

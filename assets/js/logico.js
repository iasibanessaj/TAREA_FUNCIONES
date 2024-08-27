//funciones

// Scope , alcanse o ambito de la variable  (donde vive)


var obejto = {
    nombre: "Valentina",// 
    apellido: "Torres"
}

var nombre = ""; // luego de declarada la variable, no se vuevlve a declarar con vart let ,const
var byear = 0;
const ANIO_ACTUAL = 2024;


alert("Hola , esto es el inico del programa");


//escribirMenu(); // llama a al funcion declarada mas abajo (en este caso dibuja en pantalla una ventana de opciones)

preguntarDatos();
alert(saludar(nombre));

alert(calcularEdad(byear));


function preguntarDatos(){
  //  var opcion = parseInt(prompt('Ingresa Una Opcion : \n1.Opcion1 \n2.Opcion2 \n3.Opcion'))
    var nombre = prompt('Dime tu Nombre');
    byear = parseInt(prompt('En que año has nacido'));
}

//funcion que recibe parametro y luego retorna-devuelve el resultado de la funcion , un string en este caso
function saludar(expression) {
    return `Hola ${expression}!`
}


function calcularEdad(byear) { //
    return ANIO_ACTUAL - byear;
}

// variables mutables e inmutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 4
numeroDos = 8
numeroUno = true;
numeroDos = false;

const configuracionArchivos = 'PDF';
//configuracionArchivos = 'XML';

// vamos a usar const > let > var

// Tipos de variables JS
const numero = 1;
const sueldo = 1.2;
const texto = 'Francisco';
const apellido = "Encalada";
const hijos = null;
const bool = true;
const zapatos = undefined;

//truty y falsy

if (true){
    console.log("true")
}else{
    console.log("false")
}

if (""){ //falsy
    console.log("true")
}else{
    console.log("false")
}

if ("str"){ //truty
    console.log("true")
}else{
    console.log("false")
}

if (-1){ // truty
    console.log("true")
}else{
    console.log("false")
}

if (0){ //falsy
    console.log("true")
}else{
    console.log("false")
}

if (1){ //truty
    console.log("true")
}else{
    console.log("false")
}

const rafa = {
    "nombre" : "Rafael",
    "apellido" : "Encalada",
    edad : 23,

    ropa: {
        color: "azul",
        talla: 40,
    },

    mascotas: ["a","n"]
}

//acceder a propiedades
rafa.nombre // Rafael
rafa.apellido // Encalada
rafa["nombre"] // Rafael

// modificar valores
rafa.nombre = "Francisco"
rafa["nombre"] = "Rafa"

// crear atributos
rafa.sueldo; //undefined
console.log(rafa.sueldo) // undefined
rafa.sueldo = 12;
console.log(rafa.sueldo) // 12
rafa.gastos = 8

console.log(rafa)

//eliminar propiedades
rafa.nombre = undefined
console.log(Object.keys(rafa))
console.log(Object.values(rafa))

delete rafa.nombre
console.log(Object.keys(rafa))
console.log(Object.values(rafa))
console.log(rafa)
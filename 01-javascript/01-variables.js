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
//02-arreglos.js
let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true;
arreglo = {}
arreglo = [true, 1, 1.1, "Rafa", undefined];
arreglo = [6, 7, 8, 9, 10];

//for of
for (let numero of arreglo) {
    console.log("numero", numero);
}

//for in
for (let indice in arreglo) {
    console.log(indice)
}

//añadir al final
arreglo.push(11);

//eliminar final
arreglo.pop()

//aañadir al principio
arreglo.unshift(4)

//splice
arreglo.splice(0, 0, 1, 2, 3);
console.log(arreglo)
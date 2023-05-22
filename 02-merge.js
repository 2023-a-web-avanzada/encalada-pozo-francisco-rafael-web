//Find index
//enviamos una expresion -> truty falsy
//devolver el indice del primer elemento que cumpla con la condicion

const respuestaFindIndex = arreglo
    .findIndex(
        function (valorActual) {
            return valorActual.nota < 5; //expresion
        }
    );

console.log("respuestaFindIndex", respuestaFindIndex)// si encuentra indice, sino -1

// FOREACH
// Iterar el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual) {
            console.log(valorActual)
        }
    );

console.log("respuestaForEach", respuestaForEach) //undefined

// MAP - Modificar o iterar a un NUEVO arreglo
// Iterar el arreglo
const respuestaMap = arreglo
    .map(
        function (valorActual) {
            const nuevaNota = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
                estaAprobado: notaActual > 14,
                registrado: true,
            }
            return nuevaNota;
        }
    );

console.log("respuestaMap", respuestaMap); // [...] nuevo arreglo
console.log("arreglo", arreglo);

// FILTER - devuelve los elementos que cumplen con la condicion en un arreglo
const respuestaFilter = arreglo
    .filter(
        function (valorActual) {
            return valorActual.nota > 10;
        }
    );

console.log("respuestaFilter", respuestaFilter); // [...] nuevo arreglo
console.log("arreglo", arreglo);

// SOME -> algun elemento cumple con la expresion?
// retorna boolean
// hay alguna x que cumpla esta condicion?
const respuestaSome = arreglo
    .some(
        function (valorActual) {
            return valorActual.nota > 9;
        }
    );

console.log("respuestaSome", respuestaSome); // [...] nuevo arreglo
console.log("arreglo", arreglo);

// EVERY -> todos los elementos cumple con la expresion?
// retorna boolean
// todos x cumplen esta condicion?
const respuestaEvery = arreglo
    .evety(
        function (valorActual) {
            return valorActual.nota <= 20;
        }
    );

console.log("respuestaEvery", respuestaEvery); // [...] nuevo arreglo

// REDUCE           izq -> der
// REDUCE RIGHT     der -> izq
// 1)  [1,2,5,4,5,6,7,8,9]
// 2)  0 -> Variable inicial (acumulador)
// 3)  devolvemos la Operación
// Ej: variable inicial en 100
// primera iteración: 100 - 1 = 99
// segunda iteración: 100 - 2 = 97
// tercera iteración 100 - 5 = 92
// ...
const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual, indice, arreglo) {
            return valorAcumulado + valorActual;
        }
    );
console.log("respuestaReduce", respuestaReduce);
console.log("promedio", respuestaReduce / arreglo.length);

// CONCATENAR OPERADORES
arreglo.filter((a) => a.nota < 14)
    .map((a) => a.nota + 1)
    .some((a) => a < 14)
// 07-promesas.js

const fs = require('fs');

function promesaEsPar(numero) { // f -> promesa
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            if (numero % 2 === 0) {
                resolve(numero);
            } else {
                reject(':no es par');
            }
        }
    );
    return miPrimerPromesa;
}

promesaEsPar(4)
    .then(
        (data) => {
            console.log('DATA', data); //4
        }
    )
    .catch(
        (error) => {
            console.log('ERROR', error)
        }
    )
    .finally(
        () => {
            console.log('Finally')
        }
    )

function promesaElevarAlCuadrado(numero) {
    return new Promise((res) => res(Math.pow(numero, 2)));
}

promesaEsPar(4)
    .then(
        (data) => {
            console.log('Data', data);
            return promesaElevarAlCuadrado(data)
        }
    )
    .then(
        (data=>{
            console.log('DATA', data)
        })
    )
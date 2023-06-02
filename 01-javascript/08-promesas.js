// 08-promesas.js

const fs = require('fs');

/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y anadir el
* "contenidoArchivo" a ese archivo.
* */

function leerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        console.error(errorLectura)
                        reject('Error leyendo primer archivo')
                    } else {
                        resolve(contenido)
                    }
                }
            )
        }
    )
}

function escribirArchivo(path, contenido) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenido,
                (errorEscritura) => {
                    if (errorEscritura) {
                        console.log(errorEscritura)
                        reject('Error escribiendo archivo')
                    } else {
                        resolve('El archivo se ha escrito')
                    }
                })
        }
    )
}


let dataExternal
leerArchivo('./06-ejemplo.txt')
    .then(
        (data) => {
            dataExternal = data
            console.log(data)
            return leerArchivo('./01-variables.js')
        }
    )
    .then(
        (data) => {
            console.log(data)
            return escribirArchivo("./08-nuevo-archivo", dataExternal + data)
        }
    )

async function ejercicioConAwait() {
    const pathUno = './06-ejemplo.txt'
    const pathDos = './01-variables.js'
    const pathTres = './08-nuevo-archivo'
    try {
        const contenidoUno = await leerArchivo(pathUno);
        const contenidoDos = await escribirArchivo(pathDos);
        const contenidoTotal = contenidoDos + contenidoDos
        await escribirArchivo(pathTres, contenidoTotal);
    } catch (error) {
        console.error(error)
    }
}
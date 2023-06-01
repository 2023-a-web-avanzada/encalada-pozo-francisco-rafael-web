const fs = require('fs'); // file system
                          // Importar modulo fs

console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', //Nombre o path del archivo
    'utf-8', //codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('SEGUNDO')
        if (errorLecturaPrimerArchivo) {
            throw new Error('Error leyendo primer archivo');
        } else {
            fs.readFile(
                './01-variables.js',
                'utf-8',
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {

                })
        }
    }
);
console.log('TERCERO');

// 1) Leer archivo: 06-ejemplo.txt
// luego imprimir en consola
// 2) Despues del paso 1, Leer archivo: 01-variables.js
//, luego imprimir en consola
// 3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt
// con el contenido de los otros dos archivos

console.log("EJERCICIO")
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if (errorLecturaPrimerArchivo) {
            throw new Error('Error leyendo archivo');
        } else {
            console.log(contenidoPrimerArchivo)
            fs.readFile(
                './01-variables.js',
                'utf-8',
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo)=>{
                    if (errorLecturaSegundoArchivo) {
                        throw new Error('Error leyendo archivo');
                    } else {
                        console.log(contenidoSegundoArchivo)
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            contenidoPrimerArchivo + contenidoSegundoArchivo,
                            (errorEscritura) => {

                            })
                    }
                }
            )
        }
    }
)

/*
fs.write(
    './06-nuevo-archivo.txt',
    nuevoContenido,
    (errorEscritura) => {

    }
)*/
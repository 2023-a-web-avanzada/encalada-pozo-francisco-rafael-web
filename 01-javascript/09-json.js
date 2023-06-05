// Stringify and Parse
const arregloUsuarios = [
    {
        id: 1,
        nombre: 'Rafael',
    }
];
const arregloGuardado = JSON.stringify(arregloUsuarios);
const usuario = {
    id:1,
    nombre: 'Rafael',
};
const objetoGuardado = JSON.stringify(usuario)
console.log('arregloGuardado', arregloGuardado)
console.log('objetoGuardado', objetoGuardado)
const  arregloRestaurado = JSON.parse(arregloGuardado)
const objetoRestaurado = JSON.parse(objetoGuardado)
console.log('arregloRestaurado', arregloRestaurado)
console.log('objetoRestaurado', objetoRestaurado)
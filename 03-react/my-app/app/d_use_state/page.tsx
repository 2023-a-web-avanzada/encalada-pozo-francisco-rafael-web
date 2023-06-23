'use client'
import {useEffect, useState} from "react";

interface Usuario {
    nombre: string;
    edad: number;
    casado: boolean;
    hijos?: number[];
}

export default function Page() {
    const [numero, setNumero] = useState(0);
    const [arregloNumeros, setArregloNumeros] = useState([1, 2, 3] as number[]);
    const [usuario, setUsuario] = useState({
        nombre: "Rafael",
        edad: 23,
        casado: false,
    } as Usuario)

    useEffect(
        () => {
            console.log('INICIO EL COMPONENTE',
                numero, usuario);
        },
        [] // arreglo de variables
        // Si esta vacio se ejecuta al principio una vez
    );

    useEffect(
        () => {
            console.log('Cambio numeo', numero);
        },
        [numero]// arregloVaribles
    );

    useEffect(
        ()=>{
            console.log('Cambio ArregloNumeros',
                arregloNumeros);
        },
        [arregloNumeros] // arregloVariables
    );

    useEffect(
        ()=>{
            console.log("cambio usuario", usuario);
        },
        [usuario] //arregloVariables
    );

    return (<>
        <button
            className="bg-blue-500 m-2"
            onClick={(event) => {
                event.preventDefault();
                setNumero(numero + 1);
            }}>
            Numero {numero}</button>
        <button
            className="bg-blue-500 m-2"
            onClick={(event) => {
                event.preventDefault();
                setArregloNumeros([...arregloNumeros, 1]);
            }}>
            Arreglo {arregloNumeros}</button>
        <button
            className="bg-blue-500 m-2"
            onClick={(event) => {
                event.preventDefault();
                let usuarioNuevo = {...usuario, nombre: new Date().toString()};
                setUsuario(usuarioNuevo)
            }}>
            Usuario {JSON.stringify(usuario)}</button>
    </>)
}
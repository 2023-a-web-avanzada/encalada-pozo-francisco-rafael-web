import {useEffect, useState} from "react";
import {ContenedorContextObjeto} from "@/app/f_use_context/interfaces/ContenedorContextObjeto";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";
import EcomponenteA from "@/app/f_use_context/components/EcomponenteA";

export default function Econtenedor() {
    const [nombreUsuario, setNombreUsuario]  = useState("Rafa")
    const objetoContenedorContext: ContenedorContextObjeto = {
        nombreUsuario,
        setNombreUsuario
    };
    useEffect(
        () => {
            console.log('Cambio en contenedor', objetoContenedorContext.nombreUsuario)
        },
        [objetoContenedorContext.nombreUsuario]
    )
    return (
        <>
            <ContenedorContext.Provider value={objetoContenedorContext}>
                <EcomponenteA></EcomponenteA>
            </ContenedorContext.Provider>
        </>
    )
}
import {useContext, useEffect} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";
import EcomponenteB from "@/app/f_use_context/components/EcomponenteB";

export default function EcomponenteA() {
    const contenedorContexto = useContext(ContenedorContext);

    useEffect(
        () => {
            console.log(
                'Cambio nombre usuario CompA',
                contenedorContexto.nombreUsuario
            )
        },
        [contenedorContexto.nombreUsuario]
    )

    return (
        <>
            <h1>Componente A</h1>
            <p>{contenedorContexto.nombreUsuario}</p>
            <button className={"bg-blue-500"} onClick={
                event => {
                    event.preventDefault();
                    contenedorContexto.setNombreUsuario("CompA")
                }
            }>
                Actualizar
            </button>
            <br/>
            <EcomponenteB></EcomponenteB>
        </>
    )
}
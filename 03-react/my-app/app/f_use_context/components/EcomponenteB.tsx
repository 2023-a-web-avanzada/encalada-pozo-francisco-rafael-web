import {useContext} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";
import EcomponenteC from "@/app/f_use_context/components/EcomponenteC";

export default function EcomponenteB() {
    const contenedorContexto = useContext(ContenedorContext);

    return (
        <>
            <h1>Componente B</h1>
            <p>{contenedorContexto.nombreUsuario}</p>
            <button className={"bg-blue-500"} onClick={
                event => {
                    event.preventDefault();
                    contenedorContexto.setNombreUsuario("CompB")
                }
            }>
                Actualizar
            </button>
            <br/>
            <EcomponenteC></EcomponenteC>
        </>
    )
}
import {useContext} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";

export default function EcomponenteC() {
    const contenedorContexto = useContext(ContenedorContext);

    return(<>
        <h1>Componente C</h1>
        <p>{contenedorContexto.nombreUsuario}</p>
        <button className={"bg-blue-500"} onClick={
            event => {
                event.preventDefault();
                contenedorContexto.setNombreUsuario("CompC")
            }
        }>
            Actualizar
        </button>
    </>)
}
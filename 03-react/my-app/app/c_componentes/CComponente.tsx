import {useState} from "react";

export type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
}
export default function CComponente(
    props: PropiedadesComponente
) {
    const {url, iteraciones, mostrar} = props;

    const arreglo = [0, 1]
    //const numeroUno = arreglo[0]
    //const numeroDos = arreglo[1]
    const [numeroUno, numeroDos] = arreglo
    const contenidoAdicional = () => {
        if (mostrar) {
            return <p>Mostrar</p>
        }
        return <p>Ocultar</p>
    }
    const [iteracionLocal, setIteracionLocal] = useState(
        iteraciones
    )

    const [className, setColor] = useState('')

    return (
        <>
            <a target="_blank"
               href={url}>IR A URL</a>
            <p>Iteracion: {iteraciones}</p>
            <p className={className}>Iteracion: {iteraciones} {iteracionLocal}</p>
            <p>Mostrar: {mostrar}</p>
            {contenidoAdicional()}
            {mostrar && <p>Mostrar rapido</p>}

            <button className="bg-blue-500" onClick={
                event => {
                    setIteracionLocal(iteracionLocal + 1);
                    if (iteracionLocal % 2 == 0) {
                        setColor('bg-red-500')
                    } else {
                        setColor('bg-yellow-500')
                    }
                }

            }> Aumentar
            </button>
        </>
    )
}
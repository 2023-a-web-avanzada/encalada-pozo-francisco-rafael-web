'use client'
import io from "socket.io-client"
import {useEffect, useState} from "react";
import {MensajeChatProps, Posicion} from "@/app/k_websockets/types/mensaje-chat-props";
import {useForm} from "react-hook-form";
import MensajeChat from "@/app/k_websockets/components/MensajeChat";

const servidorWebSocket = 'http://localhost:11202';
const socket = io(servidorWebSocket);

export default function Page() {
    const [isConnected, setConnected] = useState(socket.connected);
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[]);
    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            salaID: '',
            nombre: '',
            mensaje: '',
        },
        mode: 'all'
    })
    useEffect(
        () => {
            socket.on('connect', () => {
                setConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setConnected(false);
                console.log('No esta conectado');
            });
        },
        []
    );

    const enviarEventoHola = () => {
        const mensaje = {mensaje: 'Rafa'};
        socket.emit(
            'hola', // Nombre evento
            mensaje, // Datos evento
            (datosEventoHola: { mensaje: string }) => {
                // Callback o respuesta del evento
                console.log(datosEventoHola) // {mensaje: 'ok'};
                const nuevoMensaje: MensajeChatProps = {
                    ...mensaje,
                    nombre: 'Rafa',
                    posicion: Posicion.D,
                };
                setMensajes((mensajesAnteriores) => [
                    ...mensajesAnteriores,
                    nuevoMensaje
                ]);
            }
        )
    }

    const estaConectado = () => {
        if (isConnected) {
            return <span>Conectado :)</span>
        } else {
            return <span>Desconectado :(</span>
        }
    }
    return (
        <>
            <h1>Websockets</h1>
            <p><strong>{estaConectado()}</strong></p>
            <button className={"btn btn-success"}
                    onClick={() => enviarEventoHola()}>
                Enviar evento hola
            </button>
            <div className={"row"}>
                <div className={"col-sm-6"}>
                    {mensajes.map((mensaje, indice) =>
                        <MensajeChat key={indice}
                                     mensaje={mensaje.mensaje}
                                     nombre={mensaje.nombre}
                                     posicion={mensaje.posicion}
                        />)
                    }
                </div>
            </div>
        </>
    );
}
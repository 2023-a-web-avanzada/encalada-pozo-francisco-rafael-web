import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {EventosService} from "./evento.service";
import {Server, Socket} from "socket.io";

@WebSocketGateway(
    11202, // Puerto donde esta escuchando el servidor de websockets
    {
        cors: {
            origin: '*', // Habilitando la conexion desde cualquier IP
        }
    }
)

export class EventosGateway {
    constructor(private readonly _eventosService: EventosService) {
    }

    @SubscribeMessage('hola') // Nombre del metodo para recibir eventos
    devolverHola(
        @MessageBody()
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        console.log('message', message);
        socket.broadcast
            .emit(
                'escucharEventoHola', //Nombre del evento que vamos a enviar a los clientes conectados
                { // OBJETO A ENVIAR
                    mensaje: this._eventosService.saludar() + ' ' + message.mensaje
                }
            );
        return {mensaje: 'ok'}; // callback del metodo "hola"
    }

    @SubscribeMessage('unirseSala') // Nombre metodo "unirseSala"
    unirseSala(
        @MessageBody()
            message: { salaId: string, nombre: string }, //parametros metodo
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaId);    // socket.join agrupa a los clientes de websockets
                                        // según un identificador. Al unirse a una sala
                                        // podemos escuchar los mensajes de esa sala.
        const mensajeDeBienvenidaSala = {
            mensaje: `Bienvenido ${message.nombre} a la sala ${message.salaId}`
        };
        socket.broadcast
            .to(message.salaId) // Manda el mensaje a un grupo en especifico segun el identificador
            .emit('escucharEventoUnirseSala', // los que ESCUCHAN el evento en este grupo
                mensajeDeBienvenidaSala);
        return {mensaje: 'ok'}; // callback del metodo "unirseSala"
    }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        @MessageBody()
            message: { salaId: string, nombre: string, mensaje: string }, //parametros metodo
        @ConnectedSocket()
            socket: Socket
    ){
        const mensajeSala = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };
        socket.broadcast
            .to(message.salaId) // Sala a la que enviamos el mensaje
            .emit('escucharEventoMensajeSala', mensajeSala); // nombre del evento y datos a enviar
        return {mensaje: 'ok'}
    }
}
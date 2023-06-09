export class A {

}

export interface B{
    nombre: string,
    edad: number;
}

export type C = {
    nombre: string;
    edad: number;
}

type Usuario = {
    nombre: string;
    apellido: string;
    edad?: number | undefined;
    sueldo?: number;
    casado: boolean | 0 | 1;
    estado: "AC" | "IN" | "BN";
    //funciones
    imprimirUsuario: (mensaje: string) => string | "BN";
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => "AP" | "AF" | "AT";
}
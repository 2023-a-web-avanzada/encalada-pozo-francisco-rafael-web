
let nombre: string = "Rafa";
let nombre2: string = "Francisco";

let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

//Duck typing
let apellido = "Encalada"; // string
// apellido = 1;
apellido = "Pozo";
apellido.toUpperCase();

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => "2";
let edadMultiple: number | string | Date = "2";
edadMultiple = "2";
edadMultiple = "dos";
edadMultiple = new Date();
edadMultiple = 2222;
let numeroUnico: number = 1;
numeroUnico += Math.pow((edadMultiple as number),2);
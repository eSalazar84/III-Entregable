/* 
4- Generar una clase que maneje el club, GestorClub, 
que deber� permitirnos la persistencia de nuestros datos. 
Usaremos filesystem para crear un archivo JSON donde 
guardaremos nuestros socios.
Tambien usaremos el paquete readlineSync para pedir por consola 
los datos que necesitamos de nuestros socios.
Debemos guardar 10 socios.
5- Por ultimo implementar en la clase GestorClub, 
4 funciones que filtren y/o encuentren en nuestro archivo JSON 
algun dato que buscamos. Por ejemplo buscar socios por nombre, 
por deporte, documento o telefono.
*/
import { Jugador } from "./jugador";
const fs = require("fs");
const readlineSync = require("readline-sync")

export class GestorClub {
    constructor() {
        fs.writeFileSync("./socios.json", "[]")
    }
    data() {
        return JSON.parse(fs.readFileSync("./socios.json"))
    }
    setAgregarSocio() {
        const nombre: string = readlineSync.question("Ingrese el nombre del afiliado: ");
        const apellido: string = readlineSync.question("Ingrese el apellido del mismo: ");
        const fechaDeNacimiento: string = readlineSync.question("Ingrese la fecha de nacimiento con el formato aaa/mmm/ddd: ")
        const documento: number = Number(readlineSync.question("Ingrese el documento, sin puntos: "));
        const telefono: number = Number(readlineSync.question("Ingrese el telefono: "));
        const listaDeportes = ["futbol", "basket", "zumba", "voley", "natacion", "gym"];
        const deporte = readlineSync.keyInSelect(listaDeportes, "Ingrese que deporte va a practicar: ");
        const miembroDesde: string = readlineSync.question("Ingrese la fecha desde que es miembro el socio en formate aaa/mmm/ddd: ");

        const nuevoSocio = new Jugador(nombre, apellido, fechaDeNacimiento, documento, telefono, deporte, miembroDesde);
        const socios = [...this.data(), nuevoSocio];
        fs.writeFileSync("./socios.json", JSON.stringify(socios, null, 2));
    }
    setSearchLastName() {
        /* const autoEncontrado = listadoAutos.find((auto) => auto.maker === maker);
        if (autoEncontrado) {
            console.log(`${maker} existe en el Registro.`);
            return autoEncontrado;
        } else {
            console.log(`${maker} NO existe en el Registro.`);
        } */
    }
    setSearchBySports() {

    }
    setSearchByDocument() {

    }
    setSearchName() {

    }
}
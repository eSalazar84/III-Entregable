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
import { Jugador, Deportes } from "./jugador";

const fs = require("fs");
const readlineSync = require("readline-sync")

export class GestorClub {
    constructor() {
        fs.writeFileSync("./socios.json", "[]")
    }
    data() {
        return JSON.parse(fs.readFileSync("./socios.json"))
    }
    setAddMember() {
        const nombre: string = readlineSync.question("Ingrese el nombre del afiliado: ");
        const apellido: string = readlineSync.question("Ingrese el apellido del mismo: ");
        const fechaDeNacimiento: string = readlineSync.question("Ingrese la fecha de nacimiento con el formato aaa/mmm/ddd: ")
        const documento: number = Number(readlineSync.question("Ingrese el documento, sin puntos: "));
        const telefono: number = Number(readlineSync.question("Ingrese el telefono: "));
        const listaDeportes = ["futbol", "basket", "zumba", "voley", "natacion", "gym"];
        const deporte = readlineSync.keyInSelect(listaDeportes, "Ingrese que deporte va a practicar: ");
        const play: any = Deportes[deporte]
        const miembroDesde: string = readlineSync.question("Ingrese la fecha desde que es miembro el socio en formate aaa/mmm/ddd: ");

        const nuevoSocio = new Jugador(nombre, apellido, fechaDeNacimiento, documento, telefono, play, miembroDesde);
        const socios = [...this.data(), nuevoSocio];
        fs.writeFileSync("./socios.json", JSON.stringify(socios, null, 2));
    }
    setSearchBySports(selectSport: string) {
        const deporteSocio = this.data().find((persona: { deporte: Deportes }) => persona.deporte.toString() === selectSport);
        if (deporteSocio) {
            return deporteSocio;
        } else {
            return `No se encontro socios que practiquen este deporte.`
        }
    }
    setSearchLastName(apellido: string) {
        const apellidoMinus: string = apellido.toLowerCase();
        const nombreSocio = this.data().find((persona: { apellido: string; }) => persona.apellido.toLowerCase() === apellidoMinus);
        if (nombreSocio) {
            return nombreSocio
        } else {
            return `No se encontro el apellido que buscaba, intente nuevamente.`
        }
    }
    setSearchByDocument(documento: number): string {
        if (documento.toString().length !== 8) return `ingrese un documento de 8 cifras por favor`;
        const documentoSocio = this.data().find((persona: { documento: number }) => persona.documento === documento);
        if (documentoSocio) {
            return documentoSocio;
        } else {
            return `No se encontro el documento que buscaba, intente nuevamente.`;
        }
    }
    setSearchPhone(telefono: number) {
        if (telefono.toString().length < 10 || telefono.toString().length > 13) return `ingrese un telefono de válido por favor`;
        const documentoSocio = this.data().find((persona: { telefono: number }) => persona.telefono === telefono);
        if (documentoSocio) {
            return documentoSocio;
        } else {
            return `No se encontro el telefono que buscaba, intente nuevamente.`;
        }
    }
    setDeleteMember (id:number):string{
        const indexListMembers = this.data().findIndex((persona:{documento:number}) => persona.documento === id);
        this.data().splice(0,1)
        if (indexListMembers >= 0) {
          this.data().splice(indexListMembers, 1);
          console.log("El socio ", id, "se dio de baja");
          //console.log(this.data());          
          let members= [...this.data()]
          fs.writeFileSync("./member.json", JSON.stringify(members));        
          //console.log(members);    
          return this.data();
        } else {
            return `El socio ${id} no pudo darse de baja porque no se encontro`
        } 

    }

















    /* setDeleteMember(id: number): string {
        const indexListMembers: number = this.data().findIndex((persona: { documento: number }) => persona.documento == id);
        if (indexListMembers >= 0) {
            this.data().splice(indexListMembers, 1);
            const sociosModificado = [...this.data()]
            fs.writeFileSync("./socios.json", JSON.stringify(sociosModificado))
            //console.log(`Ha sido eliminado del Registro de socios: ${id}`);
            return this.data();
        } else {
            return `El socio ${id} no ha sido eliminado`;
        }
    } */
}
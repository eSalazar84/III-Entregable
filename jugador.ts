/* 
3 - Debemos implementar nuestra clase abstracta, 
para eso generaremos una clase llamada Jugador, 
que extiende nuestra clase MiembroClub.
Lo unico que debemos agregarle a esta nueva clase es un deporte.
Con enum generaremos un listado de deportes: 
futbol, basket, zumba, voley, natacion, gym.
*/
import { MiembroClub } from "./miembroClub";

export enum Deportes {
    futbol, basket, zumba, voley, natacion, gym
}

export class Jugador extends MiembroClub {
    deporte: Deportes
    constructor(nombre:string,apellido:string, fechaDeNacimiento:string, documento:number, telefono:number, deporte:Deportes,miembroDesde:string){
        super(nombre,apellido,fechaDeNacimiento,documento,telefono,miembroDesde);
        this.deporte=deporte
    }
}
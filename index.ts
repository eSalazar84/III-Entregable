/* 
Entregable Club
Presentaci�n: 
- El entregable debe tener la estructura de un proyecto de node.js
- Dependencias:  @types/node ,   readline-sync , ts-node
- Deben ser cinco archivos (No se olviden de exportar): 
index.ts : aqui se ejecutaran nuestras funciones.
PersonaInterface.ts : posee la interface Persona con los 
datos basicos.
AbstractMiembroClub.ts : donde deben escribir el abstract 
del MiembroClub e implementar la interface Persona
Jugador.ts : aqui escribiremos nuestro enum Deporte 
y la clase Jugador que extiende a MiembroClub.
GestorClub.ts : en este archivo requeriremos 
readlineSync, y filesystem. 
Tendremos la logica para la generacion del archivo JSON 
para agregar nuestros socios y los filtros.
*/
import { GestorClub } from "./gestorClub";

const equipoPrueba:GestorClub=new GestorClub();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();
equipoPrueba.setAddMember();

equipoPrueba.setSearchByDocument(31104967);

equipoPrueba.setSearchBySports("basket");

equipoPrueba.setSearchLastName("Salazar");

equipoPrueba.setSearchPhone(2281514468)
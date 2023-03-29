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
equipoPrueba.setAddMember()
equipoPrueba.setAddMember()

/* equipoPrueba.setAgregarSocio(`Emiliano`,`Salazar`,`1984/09/20`,31104967,2281514468,Deportes.futbol,new Date().toLocaleDateString());
equipoPrueba.setAgregarSocio(`joselo`,`perez`,`1989/09/11`,35204967,2281513685,Deportes.basket,new Date().toLocaleDateString());
equipoPrueba.setAgregarSocio(`Pepito`,`Cibrian`,`1995/09/11`,40204967,2281152685,Deportes.futbol,new Date().toLocaleDateString());
equipoPrueba.setAgregarSocio(`Pepito`,`Cibrian`,`1995/09/11`,40204967,2281152685,Deportes.futbol,new Date().toLocaleDateString()); */


//console.log(equipoPrueba.data());

//equipoPrueba.setSearchByDocument(31104967)

//console.log("Busqueda por documento",equipoPrueba.setSearchByDocument(31104967));

//equipoPrueba.setSearchLastName(`salaZar`)

//console.log("Busqueda por apellido",equipoPrueba.setSearchLastName(`salaZar`));

//equipoPrueba.setSearchBySports(`basket`)

//console.log(equipoPrueba.setSearchBySports(`basket`));

//equipoPrueba.setSearchPhone(2281152685)

//console.log("telefono",equipoPrueba.setSearchPhone(2281514468))

equipoPrueba.setDeleteMember(31104967)

console.log(equipoPrueba.setDeleteMember(31104967));

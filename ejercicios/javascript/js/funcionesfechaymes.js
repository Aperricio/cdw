function dimeHoy() {
    let hoy = new Date();
    return hoy.toISOString().slice(0,10); // toISOString() devuelve una cadena en el formato simplificado extendido ISO (ISO 8601), que siempre mide 24 o 27 caracteres de largo: (YYYY-MM-DDTHH:mm:ss.sssZ o ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectivamente). El uso horario no tiene retraso respecto a UTC, como lo denota el sufijo "Z". slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
}

/*  OPCIÓN MÁS SENCILLA:

    function mesActual() {
    let mesHoy = new Date().getMonth();
    return mesHoy + 1;
}

OPCIÓN MÁS COMPLEJA CON SLICE:*/

function mesActual() {
    let mesHoy = new Date();
    return mesHoy.toISOString().slice(5,7);
}
function diasHasta(fecha) {

    var equivalenciams = [1000 * 60 * 60 * 24 * 30, 1000 * 60 * 60 * 24, 1000 * 60 * 60, 1000 * 60, 1000];
    var respuesta = new Array(equivalenciams.length);

    fechaActual = new Date();

    var ms = fecha - fechaActual;

    for (let i = 0; i < equivalenciams.length; i++) {
        respuesta[i] = Math.floor(ms / equivalenciams[i]);
        ms = ms % equivalenciams[i];
    }

    return respuesta[0] + " meses, " + respuesta[1] + " días, " + respuesta[2] + " horas, " + respuesta[3] + " minutos y " + respuesta[4] + " segundos";
}

const hoy = new Date();

var mes = prompt("Introduce tu mes de nacimiento");
var dia = prompt("Introduce tu día de nacimiento");

var cumple = new Date(hoy.getFullYear(), mes - 1, dia);

if (cumple < hoy)
    cumple.setFullYear(hoy.getFullYear() + 1);

console.log(diasHasta(cumple));

const dias =
    [
        "domingo",
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado"
    ]

console.log("Tu próximo cumple será " + dias[cumple.getDay()]);
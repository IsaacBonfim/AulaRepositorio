const currentHour = 11;
let message = '';

if (currentHour >= 22 && currentHour <= 24 ) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
} else if (currentHour >= 1 && currentHour < 4) {
    message = "Ta muito tarde ou muito cerdo, depende do seu ponto de vista.";
} else {
    message = "Essa hora não existe.";
}

console.log(message);
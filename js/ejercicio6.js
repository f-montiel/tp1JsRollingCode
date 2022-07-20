let primerNumero = parseInt(prompt("Escribí el primer número", 0));
let segundoNumero = parseInt(prompt("Escribí el segundo número", 0));
if(isNaN(primerNumero) || isNaN(segundoNumero)){
    document.write("Escriba dos numeros validos");
} else if(primerNumero > segundoNumero) {
    document.write(primerNumero);
} else if (primerNumero < segundoNumero) {
    document.write(segundoNumero);
} else {
    document.write("Los números son iguales");
}
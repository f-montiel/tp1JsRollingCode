let primerNumero = parseInt(prompt("Escribir el primer número", 0));
let segundoNumero = parseInt(prompt("Escribir el segundo número", 0));
let tercerNumero = parseInt(prompt("Escribir el tercer número", 0));
if(isNaN(primerNumero) || isNaN(segundoNumero) || isNaN(tercerNumero)){
    document.write("Ingrese tres numeros validos");
} else if(primerNumero == segundoNumero || primerNumero == tercerNumero || segundoNumero == tercerNumero){
    document.write("Dos o mas numeros son iguales");
} else if(primerNumero > segundoNumero & primerNumero > tercerNumero){
    document.write("El primer numero es el mayor : " + primerNumero );
} else if(segundoNumero > primerNumero & segundoNumero > tercerNumero){
    document.write("El segundo numero es el mayor : " + segundoNumero);
} else if(tercerNumero > primerNumero & tercerNumero > segundoNumero){
    document.write("El tercer numero es el mayor : " + tercerNumero);
}
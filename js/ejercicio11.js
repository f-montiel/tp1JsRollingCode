let numero = parseFloat(prompt("Escribir un número"));
let resto2 = numero % 2;
let resto3 = numero % 3;
let resto5 = numero % 5;
let resto7 = numero % 7;
console.log(numero);
if(isNaN(numero)){
    document.write("Debe ingresar un numero");
} else if(resto2 == 0 || resto3 == 0 || resto5 == 0 || resto7 == 0){
    document.write("El numero ingresado es divisible en:")
    if(resto2 == 0) document.write(" dos,");
    if(resto3 == 0) document.write(" tres,");
    if(resto5 == 0) document.write(" cinco,");
    if(resto7 == 0) document.write(" siete");
} else {
    document.write("EL numero ingresado no es divisible en dos, tres, cinco o siete");
}
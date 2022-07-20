let numero = parseFloat(prompt("Escribir un número", 0));
let resto = numero % 2;
if(isNaN(resto)){
    document.write("Escribe un numero");
}else if(resto == 0){
    document.write("El numero ingresado se puede dividir en 2");
} else {
    document.write("El numero ingresado no se puede dividir en 2");
}
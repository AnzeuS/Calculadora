// Declamos un constante con el valor que el usuario nos de.
const repuesta = prompt("Que operacion quieres hacer? 1- Suma 2- Resta 3-Multiplicacion 4- Division");
// Almacenamos los valores del prompt.
const val1 = prompt("Digite el primer numero:");
const val2 = prompt("Digite el segundo numero: ");

//Utilizamos funciones que se llamaran por el alert
function suma(num1,num2) {
    return (parseInt(num1) + parseInt(num2));
}
function resta(num1,num2) {
    return (parseInt(num1) - parseInt(num2));
}
function multiplicacion(num1,num2) {
    return (parseInt(num1) * parseInt(num2));
}
function division(num1,num2) {
    return (parseInt(num1) / parseInt(num2));
}
//Utilizamos if 
//Para realizar una de las operaciones almacenadas en la constante repuesta.
if (repuesta == 1){
    alert("Tu resultado es: " +suma(val1,val2))
}
else if(repuesta == 2){
    alert("Tu resultado es: " +resta(val1,val2))
}
else if(repuesta == 3){
    alert("Tu resultado es: " +multiplicacion(val1,val2))
}
else if(repuesta == 4){
    alert("Tu resultado es: " +division(val1,val2))
}
//En caso de no poner unos de los valores se ejecuta el else.
else{
    alert("No has tomado ninguna opcion, recarga e intente de nuevo")
}






function actualizar(elem){
    var salida = obtenerResult()
    console.log(salida)
    if(salida != '0' || isNaN(elem)){
        ponerResult(salida + elem);
    } 
    else{
        ponerResult(elem);
    }
}
function calcular(){
    var resultado = eval(obtenerResult());
    ponerResult(resultado);
}
function obtenerResult(){
    return(document.getElementById('salida').innerHTML);
}
function ponerResult(valor){
    document.getElementById('salida').innerHTML = valor;
}
function limpiar(){
    ponerResult(0);
}
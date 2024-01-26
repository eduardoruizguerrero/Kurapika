//nos indica que el numero secreto se está guardando en el registro
let numeroSecreto = 0;
//console.log(numeroSecreto);
let intentos = 0;
let maximosIntentos = 5;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
let numeroMinimo = 1;


//nos asigna atajos para poder cambiar facilmente los textos, haciendo referencia a eLemento y texto
function asignarTextoElemento(eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento);
elementoHTML.innerHTML = texto;
return;
}

//ESTA FUNCION nos permite cambiar el texto de un titulo(h1) y de un parrafo(p), generar nuevo numero y poner los intentos
function condicionesIniciales() {
    asignarTextoElemento("h1", "El número de Kurapika!");
    asignarTextoElemento("p", `Dime un número del ${numeroMinimo} al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//genera nuestro numero secreto
//ESTO ES UN ALGORITMOOOO
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    /*nos vee los numeros de la lista y nos dice que si todos esos numeros
    son iguales a nuestro numero maximo ya no se puede seguir y se reinicia el juego
    */
    
   //console.log(numeroGenerado)
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles, pulsa F5 o recarga la página.");
    }else{
        //si el numero generado está incluido en la lista hacemos una operación o hacemos otra
    if (listaNumeroSorteado.includes(numeroGenerado)){
        //llamamamos a la funcion, para que esta genere otro numero aleatorio
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        document.querySelector("#reiniciar").setAttribute("true","disabled");
        
        
    }
    }
    
}

function limpiarCaja (){
    document.querySelector("#valorUsuario").value = "";
}

//verifica el numero que ingresamos y tambien lo guarda en el registro
//tambien identificamos un input con un id
function verificarIntento(){
    //el parseInt nos convierte el id valorUsuario de string a numero
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //el typeof nos indica si es string o number
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    //el == nos indica que estamos generando un booleano, si es igual es true y si es indiferente es false
    if (numeroSecreto === numeroDeUsuario) {
        //dentro de una funcion llamamos a otra funcion a que nos muestre un mensaje si el ns es igual a ndu y la cantidad de intentos
        asignarTextoElemento("p", `¡Acertaste!, El número de Kurapika era ${numeroSecreto}. ¡Y Solo usaste ${intentos} ${intentos === 1 ? "intento" : "intentos"}!.`);
        //con getelementbyid buscamos nuestro id y con la funcion removeattribute seleccionamos el atributo a remover, luego de determinado if 
        document.getElementById("reiniciar").removeAttribute("disabled");
        
        //si no sucede eso nos dice si el ns es menor o mayor
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número de Kurapika es menor!");
        }else{
            asignarTextoElemento("p", "El número de Kurapika es mayor!");
        }
        intentos++;
        limpiarCaja();
        if (intentos > maximosIntentos) {
            asignarTextoElemento("p", `Llegaste al máximo de ${maximosIntentos} intentos!. El número secreto era ${numeroSecreto}.`);
            document.getElementById("reiniciar").removeAttribute("disabled");            
        }
        
        return;
    }
   
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //dar el mensajes del nombre del juego y el de 1 a 10
    //generar el numero aleatorio
    //poner nuevamente los intentos

    //se etiqueta a la funcion con las variables
    condicionesIniciales();

    //seleccionamos nuestro id y le seteamos el atriubto disabled a true
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();

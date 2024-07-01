/*
*   Variables con los números.
*/
let secretnumber = 1;
let maxnumber = 13;
let minnumber = 1;
let maxattemps = 4;
let attemps = 1;
let arraynumbers = [];
/*
*   Imágenes.
*/
document.getElementById("minnumberimg").setAttribute("hidden","true");
document.getElementById("maxnumberimg").setAttribute("hidden","true");
document.getElementById("correctnumberimg").setAttribute("hidden","true");
document.getElementById("noattempimg").setAttribute("hidden","true");
document.getElementById("pressf5img").setAttribute("hidden","true");
/*
*   Arrancar con el botón enviar deshabilitado, cuestión estética.
*/
document.getElementById("send").setAttribute("disabled","true");
document.getElementById("ryodan").onkeyup = function(){
    document.getElementById("send").removeAttribute("disabled");
}
/*
*   Arrancar con nuevo número y recargar página deshabilitados.
*/
document.getElementById("newnumber").setAttribute("disabled","true");
document.getElementById("reloadbutton").setAttribute("hidden","true");
/*
*   Leyenda de números de-al, escrita en textContent para mayor escalabilidad.
*/
document.getElementById("subtitlep").textContent = `Kurapika piensa en un número del ${minnumber} al ${maxnumber}. Dime cual es!.`
/*
*   Condiciones de inicio.
*/
start();
function start(){
    document.getElementById("textp").textContent = `El número de Kurapika es...`;
    secretnumber = secretnumbergenerate();
    attemps = 1;
    return secretnumbergenerate;
}
/*
*   Nuevo número, borra el value del input
*/
function deletenumbers(){
    document.querySelector("#ryodan").value = "";
}
/*
*   Genera el número secreto, es un número entero, suma +1 para que arranque desde uno y no desde cero.
*   Su límite de números es la variable 'maxnumber'.
*/
function secretnumbergenerate(){
    let numbergenerated = Math.floor(Math.random()*maxnumber)+1;
    console.log(numbergenerated);
    if (arraynumbers.length == maxnumber){
        document.getElementById("textp").setAttribute("hidden","true");
        document.getElementById("secrettextp").removeAttribute("hidden");
        document.getElementById("secrettextp").textContent = "Kurapika ya no puede pensar en otro número. Por favor pulsa F5 o recarga la página con el botón para seguir jugando.";
        document.getElementById("send").onclick = null;
        document.getElementById("send").hidden = true;
        document.getElementById("newnumber").hidden = true;
        document.getElementById("ryodan").hidden = true;
        document.getElementById("reloadbutton").removeAttribute("hidden");
        document.getElementById("reloadbutton").onclick = function() {
            location.reload();
        }
        /*
        *   Imágenes.
        */
        document.getElementById("defaultimg").setAttribute("hidden","true");
        document.getElementById("minnumberimg").setAttribute("hidden","true");
        document.getElementById("maxnumberimg").setAttribute("hidden","true");
        document.getElementById("correctnumberimg").setAttribute("hidden","true");
        document.getElementById("noattempimg").removeAttribute("disabled");
    }else{
        if (arraynumbers.includes(numbergenerated)){
            return secretnumbergenerate();
        }else{
            arraynumbers.push(numbergenerated);
            return numbergenerated;
        }
    }
}
/*
*   Intentos del usuario, si acierta, si no acierta o si los intentos se acaban.
*/
function attempuser(){
    let numberuser = parseInt(document.getElementById("ryodan").value);
    if (secretnumber == numberuser){
        document.getElementById("textp").textContent = `Acertaste, el número de Kurapika era ${secretnumber}`;
        document.getElementById("send").setAttribute("disabled","true");
        document.getElementById("newnumber").removeAttribute("disabled");
        /*
        *   Imágenes.
        */
        document.getElementById("defaultimg").setAttribute("hidden","true");
        document.getElementById("minnumberimg").setAttribute("hidden","true");
        document.getElementById("maxnumberimg").setAttribute("hidden","true");
        document.getElementById("noattempimg").setAttribute("hidden","true");
        document.getElementById("pressf5img").setAttribute("hidden","true");
        document.getElementById("correctnumberimg").removeAttribute("hidden");
    }else{
        if (numberuser > secretnumber){
            document.getElementById("textp").textContent = "El número de Kurapika es menor";
            /*
            *   Imágenes.
            */
            document.getElementById("defaultimg").setAttribute("hidden","true");
            document.getElementById("maxnumberimg").setAttribute("hidden","true");
            document.getElementById("noattempimg").setAttribute("hidden","true");
            document.getElementById("pressf5img").setAttribute("hidden","true");
            document.getElementById("correctnumberimg").setAttribute("hidden","true");
            document.getElementById("minnumberimg").removeAttribute("hidden");
        }else{
            document.getElementById("textp").textContent = "El número de Kurapika es mayor";
            /*
            *   Imágenes.
            */
            document.getElementById("defaultimg").setAttribute("hidden","true");
            document.getElementById("noattempimg").setAttribute("hidden","true");
            document.getElementById("pressf5img").setAttribute("hidden","true");
            document.getElementById("correctnumberimg").setAttribute("hidden","true");
            document.getElementById("minnumberimg").setAttribute("hidden","true");
            document.getElementById("maxnumberimg").removeAttribute("hidden");
        }
        attemps++;
        deletenumbers();
        if (attemps > maxattemps){
            document.getElementById("textp").textContent = `Agotaste tus ${maxattemps} intentos!. El número de Kurapika era ${secretnumber}`;
            document.getElementById("send").setAttribute("disabled","true");
            document.getElementById("newnumber").removeAttribute("disabled");
            document.getElementById("ryodan").setAttribute("disabled","true");
            document.getElementById("ryodan").value = "";
            /*
            *   Imágenes.
            */
            document.getElementById("defaultimg").setAttribute("hidden","true");
            document.getElementById("pressf5img").setAttribute("hidden","true");
            document.getElementById("correctnumberimg").setAttribute("hidden","true");
            document.getElementById("minnumberimg").setAttribute("hidden","true");
            document.getElementById("maxnumberimg").setAttribute("hidden","true");
            document.getElementById("noattempimg").removeAttribute("hidden");
        }
        return;
    }
}
/*
*   Condiciones para generar un nuevo número.
*/
function fnewnumber(){
    deletenumbers();
    start();
    document.getElementById("send").removeAttribute("disabled");
    document.querySelector("#newnumber").setAttribute("disabled","true");
    document.getElementById("ryodan").removeAttribute("disabled");
    /*
    *   Imágenes.
    */
    document.getElementById("minnumberimg").setAttribute("hidden","true");
    document.getElementById("maxnumberimg").setAttribute("hidden","true");
    document.getElementById("correctnumberimg").setAttribute("hidden","true");
    document.getElementById("noattempimg").setAttribute("hidden","true");
    document.getElementById("pressf5img").setAttribute("hidden","true");
    document.getElementById("defaultimg").removeAttribute("hidden");
}
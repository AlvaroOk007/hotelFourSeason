let btnDarkMode = document.getElementById("btn-dark-mode")
let btnLightMode = document.getElementById("btn-light-mode")
function mode(){ // Funcion para poner modo noche
    btnDarkMode.onclick = ()=>{
        darkMode();
    }
    btnLightMode.onclick = ()=>{
        lightMode();
    }
    
}
function darkMode(){ //Funcion para cargar estilos de modo noche
    document.body.style.cssText = "background: rgb(14, 14, 14); color :White"
    btnDarkMode.style.color = "Orange"
    btnLightMode.style.color = "White"
    /* MODO NOCHE DE DESCRIPTION */
    document.getElementById("description").style.background = "rgb(29, 29, 29)"
    document.getElementById("description").style.color= "white"
    /* MODO OSCURO DE ALOJAMIENTOS */
    document.querySelectorAll(".alojamiento").forEach(function(elemento){
        elemento.style.background = "rgb(20, 20, 20)";
    })
    document.querySelectorAll(".body-alojamiento p,h2").forEach(function(elemento){
        elemento.style.cssText="color:white; font-weight: 200"
    })
    document.querySelectorAll(".btn-alojamiento").forEach((elemento)=>{
        elemento.style.cssText = "color:white; font-weight:100; border-color: white"
    })

}
function lightMode(){ //Funcion para cargar estilos de modo dia
    document.body.style.cssText = "background: white; color :black"
    btnDarkMode.style.color = "white"
    btnLightMode.style.color = "Orange"
    /* MODO DIA DE DESCRIPTION */
    document.getElementById("description").style.background = "#eeeeee"
    document.getElementById("description").style.color= "black"
    /* MODO OSCURO DE ALOJAMIENTOS */
    document.querySelectorAll(".alojamiento").forEach(function(elemento){
        elemento.style.background = "white";
    })
    document.querySelectorAll(".body-alojamiento p,h2").forEach(function(elemento){
        elemento.style.cssText="color:black;font-weight: 400"
    })
    document.querySelectorAll(".btn-alojamiento").forEach((elemento)=>{
        elemento.style.cssText = "color:black; font-weight:400; border-color: black"
    })
    document.getElementById("titulo-p").style.cssText = "color:white; font-weight:100"
    document.querySelector(".down").style.cssText = "color: white; font-weight: 100"   
}
mode()


/* attente du chargement de la page */
function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

/* fonction raccourcie du querySelector */
function qS(selector){
    return document.querySelector(selector);
}

/* fonction raccourcie du querySelectorAll */
function qSAll(selector){
    return document.querySelectorAll(selector);
}

/* création d'une fonction d'initialisation / destruction de cookie */
function setCookie(name, value = '', days = -1){
    let maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; SameSite=Strict; Secure`;
}

/* récupération d'un cookie */


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
function getCookie(name){
    let tabCookies = document.cookie.split('; '); // userName, userNameOf
    for(cookie of tabCookies){
        let tabValue = cookie.split('=');
        if(tabValue[0] === name){
            return tabValue[1];
        }
    }
    return false;
}

function toggleClass(elt, classT){
    return elt.classList.toggle(classT);
}

/* fonction pour créer un élément dans le DOM avec plusieurs attributs */
function cE(element, ...attributes){
    /*
    ...attributes est appelé ['', ''], ['', '']
    ici, attributes est devient un tableau de tableaux
    [['', ''], ['', '']]
    */
    let newElement = document.createElement(element);
    attributes.forEach(function(tabAttr){
        newElement.setAttribute(tabAttr[0], tabAttr[1])
    });
    return newElement;
}

function cE(element, ...attributes){
    /*
    ...attributes est appelé ['', ''], ['', '']
    ici, attributes est devient un tableau de tableaux
    [['', ''], ['', '']]
    */
    let newElement = document.createElement(element);
    attributes.forEach(function(tabAttr){
        newElement.setAttribute(tabAttr[0], tabAttr[1])
    });
    return newElement;
}

function cEO(element, attributes = {}){
    let newElement = document.createElement(element);
    for(key in attributes){
        newElement.setAttribute(key, attributes[key]);
    }
    return newElement;
}

/* création d'un objet pour se connecter à des ressources via des requêtes AJAX */
function getXhr(){
    let xhr = null;
    /*
    XHR : XML HTTP Request
    */
    
}
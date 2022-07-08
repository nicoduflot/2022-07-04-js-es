/* attente du chargement de la page */
export function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

/* fonction raccourcie du querySelector */
export function qS(selector){
    return document.querySelector(selector);
}

/* fonction raccourcie du querySelectorAll */
export function qSAll(selector){
    return document.querySelectorAll(selector);
}

/* création d'une fonction d'initialisation / destruction de cookie */
export function setCookie(name, value = '', days = -1){
    let maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; SameSite=Strict; Secure`;
}

/* récupération d'un cookie */
export function getCookie(name){
    let tabCookies = document.cookie.split('; '); // userName, userNameOf
    for(cookie of tabCookies){
        let tabValue = cookie.split('=');
        if(tabValue[0] === name){
            return tabValue[1];
        }
    }
    return false;
}

export function toggleClass(elt, classT){
    return elt.classList.toggle(classT);
}

/* fonction pour créer un élément dans le DOM avec plusieurs attributs */
export function cE(element, ...attributes){
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

export function cEO(element, attributes = {}){
    let newElement = document.createElement(element);
    for(let key in attributes){
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
    /* vérifier si le navigateur supporte un des protocoles AJAX existants */
    if( window.ActiveXObject || window.XMLHttpRequest ){
        /* Est-ce que le navigateur nécéssite un protocole Microsoft */
        if( window.ActiveXObject){
            /* il existe deux protocoles microsoft */
            try{
                xhr = ActiveXObject('Msxml2.XMLHTTP');
            } catch(e){
                xhr = ActiveXObject('Microsoft.XMLHTTP');
            }
        }else{
            xhr = new XMLHttpRequest();
        }
    }else{
        console.log('Votre navigateur ne supporte pas les protocoles AJAX');
        xhr = false;
    }
    return xhr;
}

export function jsonToTableObject(data){
    let thead = '<tr>';
    let tbody = '';
    let firstRound = true;
    data.forEach((dataL1)=>{
        tbody = tbody + `<tr>`;
        for(key in dataL1){
            if(firstRound){
                thead = thead + `<th>${key}</th>`;
            }
            /* si l'attribut qu'on récupère contient une donnée ou un objet */
            if('object' !== typeof dataL1[key]){
                /* si ce n'est pas un objet, on l'affiche */
                tbody = tbody + `<td data-info="${key}">${dataL1[key]}</td>`;
            }else{
                /* si c'est un objet, on parcour ses attributs */
                tbody = tbody + `<td data-info="${key}">`;
                for(item in dataL1[key]){
                    /* si l'attribut qu'on récupère contient une donnée ou un objet */
                    if('object' !== typeof dataL1[key][item]){
                        /* si ce n'est pas un objet, on l'affiche */
                        tbody = tbody + `<b>${item}</b> : <i>${dataL1[key][item]}</i><br />`;
                    }
                    /* 
                    si c'est un objet, on ne l'affiche pas et on ne 
                    le parcoure pas pour pas avoir de troisième niveau 
                    */
                }
                tbody = tbody + `</td>`;
            }
        }
        tbody = tbody + `</tr>`;
        firstRound = false;
    } );
    thead = thead + '</tr>';
    return [thead, tbody];
}

export function jsonResultSearch(data, search){
    search = search.toLowerCase();
    let thead = '<tr>';
    let tbody = '';
    let tempLine = '';
    let searchOK = false;
    let firstRound = true;
    let compare = '';
    data.forEach((dataL1)=>{
        tempLine = tempLine + `<tr>`;
        for(key in dataL1){
            if(firstRound){
                thead = thead + `<th>${key}</th>`;
            }
            /* si l'attribut qu'on récupère contient une donnée ou un objet */
            if('object' !== typeof dataL1[key]){
                /* si ce n'est pas un objet, on l'affiche */
                compare = dataL1[key].toString().toLowerCase();
                if(compare.indexOf(search) >= 0){
                    searchOK = true;
                }
                tempLine = tempLine + `<td data-info="${key}">`;
                tempLine +=(compare.indexOf(search) >= 0)?'<mark>': '';
                tempLine = tempLine + `${dataL1[key]}`;
                tempLine += (compare.indexOf(search) >= 0)?'</mark>': '';
                tempLine = tempLine + `</td>`;
            }else{
                /* si c'est un objet, on parcour ses attributs */
                tempLine = tempLine + `<td data-info="${key}">`;
                for(item in dataL1[key]){
                    /* si l'attribut qu'on récupère contient une donnée ou un objet */
                    if('object' !== typeof dataL1[key][item]){
                        /* si ce n'est pas un objet, on l'affiche */
                        compare = dataL1[key][item].toString().toLowerCase();
                        if(compare.indexOf(search) >= 0){
                            searchOK = true;
                        }
                        tempLine = tempLine + `<b>${item}</b> : <i>`;
                        tempLine +=(compare.indexOf(search) >= 0)?'<mark>': '';
                        tempLine = tempLine + `${dataL1[key][item]}`;
                        tempLine +=(compare.indexOf(search) >= 0)?'</mark>': '';
                        tempLine = tempLine + `</i><br />`;
                    }
                    /* 
                    si c'est un objet, on ne l'affiche pas et on ne 
                    le parcoure pas pour pas avoir de troisième niveau 
                    */
                }
                tempLine = tempLine + `</td>`;
            }
        }
        tempLine = tempLine + `</tr>`;
        /* ne faire l'ajout de la ligne temporaire que si une des information qu'elle contient correspond à la recherche */
        if(searchOK){
            tbody = tbody + tempLine;
        }
        tempLine = '';
        searchOK = false;
        firstRound = false;
    } );
    thead = thead + '</tr>';
    return [thead, tbody];
}
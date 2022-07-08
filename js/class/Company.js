// va utiliser une class exterieure : User
import {User} from './User.js';

/*
le mot-lef "default" précise durant l'import l'élément qu'on souhaite récupérer par défaut
*/
export default class Company{
    constructor(companyName){
        this.companyName = companyName;
    }
}

export class Employee extends User{
    constructor(name, job){
        super(name);
        this.job = job;
    }
}
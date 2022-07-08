/*
c'est dans cette page de script que nous allons importer les fonctions ou la totalité des fonctions des fichier script js tiers
Par exemple, il faut que j'importe la fonction foo dans cette page, elle se trouve dans Utils.js
Il faut tout d'abord la rendre importable, en précisant sont exportation dans la page Utils.js
*/
/* import des ressources fonction et variables */
import * as utils from './Utilities.js';
import {m as month} from './Config.js';
import Company, {Employee} from './Company.js';
import {Admin, User} from './User.js';

utils.loaded(() => {
    console.log(month);

    let maBoite = new Company('Agence tous risque');
    console.log(maBoite);
    console.log(maBoite.companyName);

    let user = new User('Jon Sno');
    console.log(user);

    let admin = new Admin('Aria Starck');
    console.log(admin);

    let agent = new User('Mr. T');
    console.log(agent.name);

    let soldat = new Employee('Sgt Striker', 'Général');
    console.log(`${soldat.name}, ${soldat.job}`);

});
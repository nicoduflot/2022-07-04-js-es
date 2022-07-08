/**
 * 
 * Classe Guerrier, étendue d'aventurier
 * 
 */
import Aventurier from "./Aventurier.js";

/* 
je n'ai pas besoin d'importer la classe arme, elle l'est déjà dans la classe Aventurier 
*/

export default class Guerrier extends Aventurier{
    constructor(nom, prenom){
        super(nom, prenom);
        this.force = 5.5;
        this.nbAttaques = 2;
        this.dgBase = parseFloat(this.nDgArmEq) * this.force;
        this.pvBase = 60;
        this.pvActuel = this.pvBase;
    }

    /* methode spéciale du Guerrier */
    multiAttaque(cible, nbAttaques){
        let multi = '';
        for(let i = 0; i < nbAttaques; i++){
            multi += this.attaquer(cible);
        }
        return multi;
    }

    /* le coup spécial du guerrier est qu'il fait deux attaques en une fois */
    coupSpecial(cible){
        let resCoupSpe = this.multiAttaque(cible, this.nbAttaques);
        return `${this.prenom} devient féroce : 
${resCoupSpe}`;
    }
}
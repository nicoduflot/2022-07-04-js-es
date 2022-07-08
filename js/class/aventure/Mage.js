/**
 * 
 * Classe Mage, étendue d'aventurier
 * 
 */
import Aventurier from "./Aventurier.js";

/* 
si je veux ajouter une arme à la création du personnage, je dois importer la class Arme
*/

import Arme from "./Arme.js";

export default class Mage extends Aventurier {
    constructor(nom, prenom) {
        super(nom, prenom);
        this.pvBase = 40;
        this.pvActuel = this.pvBase;
        this.armes.push(new Arme('Gants de force', 1.5));
        this.armes[1].setEnchantement('Force', 'L\'arme augmente les dégâts de base');
        this.armeEquipee = this.armes[1];
        this.nDgArmEq = this.armes[1].niveauDegat;
        this.dgBase = parseFloat(this.nDgArmEq) * 5;
        this.nbDBdf = 2;
        this.nbFBdf = 8;
        this.modBdf = 0;
    }

    bouleDeFeu(nbFBdf, nbDBdf){
        //console.log('BDF');
        let calc = this.d(nbDBdf, nbFBdf);
        //console.log(calc);
        return calc;
    }

    coupSpecial(cible){
        let result = '';
        let dgCoupSpe = this.bouleDeFeu(this.nbFBdf, this.nbDBdf);
        this.changePv('-', dgCoupSpe, cible);

        result += `${this.prenom} lance une boule de feu sur ${cible.prenom} ${cible.nom}.
Il subit ${dgCoupSpe} dégât(s)
${cible.prenom} est à ${cible.getPvActuel()}/${cible.getPvBase()} points de vie`;
        result += (cible.getPvActuel() <= 0)? `${cible.prenom} est mort` : ``;
        return result;
    }
}
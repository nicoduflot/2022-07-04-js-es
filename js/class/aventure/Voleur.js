/**
 * 
 * Classe Voleur, étendue d'Aventurier
 * 
 * changer le coup spécial
 * sneak attack ou attaque discrète (base 2d6 dg)
 * 
 * coup spécial = dégat de base + dégat supplémentaire de sneakAttack
 * 2d à 6f
 * 
 * le voleur est équipé de base d'une dague niveau de dégât 1.5
 * 
 */

/* */
import Aventurier from "./Aventurier.js";
import Arme from "./Arme.js";

export default class Voleur extends Aventurier {
    constructor(nom, prenom) {
        super(nom, prenom);
        this.pvBase = 40;
        this.pvActuel = this.pvBase;
        this.armes.push(new Arme('Dague', 1.5));
        this.armeEquipee = this.armes[1];
        this.nDgArmEq = this.armes[1].niveauDegat;
        this.dgBase = parseFloat(this.nDgArmEq) * 5;
        this.nbDeSneakAttack = 2;
        this.nbFaceSneakAttack = 6;
        this.modBdf = 0;
    }

    sneakAttack(nbFace, nbD){
        let calc = this.d(nbFace, nbD);
        return calc;
    }

    coupSpecial(cible){
        let result = '';
        let dgCoupSpe = this.sneakAttack(this.nbFaceSneakAttack, this.nbDeSneakAttack);
        let dgTotal = dgCoupSpe+this.dgBase;
        this.changePv('-', dgTotal, cible);

        result += `${this.prenom} se glisse derrière ${cible.prenom} ${cible.nom} et l'attaque dans le dos.
Il subit ${dgTotal} dégât(s) (${this.dgBase} dégâts de base + ${dgCoupSpe} dégâts attaque sournoise)
${cible.prenom} est à ${cible.getPvActuel()}/${cible.getPvBase()} points de vie`;
        result += (cible.getPvActuel() <= 0)? `${cible.prenom} est mort` : ``;
        return result;
    }
}
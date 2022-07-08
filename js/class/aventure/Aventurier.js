/* L'aventurier va parfois utiliser des armes, elles sont gérées par une autre classe */
import Arme from './Arme.js';

export default class Aventurier{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.force = 5;
        this.nbAttaques = 1;
        this.role = this.constructor.name;
        this.armes = [];
        this.armes.push(new Arme());
        this.armeEquipee = this.armes[0];
        this.nDgArmEq = this.armes[0].niveauDegat;
        this.dgBase = parseFloat(this.nDgArmEq) * this.force;
        this.pvBase = 50;
        this.pvActuel = this.pvBase;
    }

    /* ajouter une arme */
    ajoutArme(nomArme, nvDg){
        this.armes.push(new Arme(nomArme, nvDg));
    }
    /* changer d'arme */
    changerArme(search){
        let searchOK = false;
        for(let arme of this.armes){
            if(arme.nom === search){
                this.armeEquipee = arme;
                this.nDgArmEq = parseFloat(arme.niveauDegat);
                this.dgBase = parseFloat(this.nDgArmEq) * this.force;
                searchOK = true;
                return `Arme : ${arme.nom} équipée`;
            }
        }
        if(!searchOK){
            return `Arme : ${arme.nom} non trouvée`;
        }
    }

    d(nbFaces = 4, nbD = 1, mod = 0){
        let result = 0;
        for(let i = 0; i < nbD; i++){
            result += ( Math.floor( Math.random() * parseInt(nbFaces) + 1) );
        }
        result += parseInt(mod);
        return result;
    }

    /*
    Gestion des attributs du personnage
    */
    getPvActuel(){
        return this.pvActuel;
    }

    setPvActuel(pvModifies){
        this.pvActuel = pvModifies;
    }

    getPvBase(){
        return this.pvBase;
    }

    changePv(type, valeur, personnage){
        valeur = parseFloat(valeur)?parseFloat(valeur) : 0;
        if('-'){
            personnage.setPvActuel(personnage.getPvActuel() - valeur);
        }else{
            if( valeur + personnage.getPvActuel() <= personnage.getPvBase() ){
                personnage.setPvActuel(valeur + personnage.getPvActuel());
            }else{
                personnage.setPvActuel(personnage.getPvBase());
            }
        }
    }

    /* 
    attaquer un autre personnage 
    on attaque, si ça réussi, on soustrait les dégât de base aux PV actuel de la cible
    il faut acceder au PV actuel
    il faut une méthode de modification des pvActuel
    la cible 
    */
    attaquer(cible){
        cible.changePv('-', this.dgBase, cible);
        let resultAttaque = `
Attaque : 
${this.prenom} attaque ${cible.prenom} ${cible.nom}  avec '${this.armeEquipee.nom}' pour ${this.dgBase} dégat(s).
${cible.prenom} est à ${cible.getPvActuel()}/${cible.getPvBase()} points de vie
`;
        resultAttaque += (cible.getPvActuel() <= 0)? `${cible.prenom} est mort` : ``;
        return resultAttaque;
    }

    /* coup special */
    coupSpecial(cible){
        /* le coup spécial dépendra de la classe du personnage qui attaque */
        let totalDg = this.dgBase * 1.25;
        cible.changePv('-', totalDg, cible);
        let resultAttaque = `
Coup spécial : 
${this.prenom} attaque ${cible.prenom} ${cible.nom}  avec '${this.armeEquipee.nom}' 
le coups spécial ajoute 25% de dégât en plus pour ${this.dgBase}* 1.25 = ${totalDg} dégat(s).
${cible.prenom} est à ${cible.getPvActuel()}/${cible.getPvBase()} points de vie
`;
        resultAttaque += (cible.getPvActuel() <= 0)? `${cible.prenom} est mort` : ``;
        return resultAttaque;
    }
    
}
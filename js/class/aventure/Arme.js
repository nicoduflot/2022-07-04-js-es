/* les armes accessibles aux aventuriers */
export default class Arme{
    constructor(nom = 'Mains nues', niveauDegats = 1){
        this.nom = nom;
        this.niveauDegat = niveauDegats;
        this.enchantement = null;
    }

    setEnchantement(nom, effet){
        let enchantement = {
            nom: nom,
            effet: effet
        };
        this.enchantement = enchantement;
    }
}
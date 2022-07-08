import * as Utils from '../Utilities.js';
/* importer la classe Aventurier */

import Aventurier from './Aventurier.js';
import Guerrier from './Guerrier.js';
import Mage from './Mage.js';

let monAventurier = new Aventurier('Bogart', 'Jim');
console.log(monAventurier);
monAventurier.ajoutArme('Épée Batarde', 2);
console.log(monAventurier);
console.log(monAventurier.changerArme('Épée Batarde'));
console.log(monAventurier);

let monGuerrier = new Guerrier('De Navarre', 'Etienne');
console.log(monGuerrier);
console.log(monGuerrier.dgBase);
monGuerrier.ajoutArme('Épée Batarde', 2);
console.log(monGuerrier.changerArme('Épée Batarde'));
console.log(monGuerrier.dgBase);
console.log(monGuerrier);

let monMage = new Mage('ColdWater', 'Quentin');
console.log(monMage);
console.log(monMage.dgBase);
monMage.ajoutArme('Épée Batarde', 2);
console.log(monMage.changerArme('Épée Batarde'));
console.log(monMage.dgBase);
console.log(monMage);

console.log(monGuerrier.attaquer(monAventurier));
console.log(monAventurier);
console.log(monAventurier.coupSpecial(monGuerrier));

console.log(monGuerrier.coupSpecial(monAventurier));
console.log(monMage.coupSpecial(monGuerrier));
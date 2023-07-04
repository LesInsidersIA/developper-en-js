class Animal {
  constructor(nom, color, nbre_pattes, age) {
    this._nom = nom;
    this.color = color;
    this.nbre_pattes = nbre_pattes;
    this.age = age;
  }

  direBonjour() {
    console.log("Bonjour, je suis " + this._nom);
  }

  set nom(newName) {
    this._nom = newName;
  }

  get nom() {
    return this._nom;
  }
}

class Chien extends Animal {
  constructor(nom, color, nbre_pattes, age, type) {
    super(nom, color, nbre_pattes, age);
    this.type = type;
  }

  aboyer() {
    console.log("Wouaaaf");
  }

  afficherInfosChiens() {
    console.log("Nom chien = " + this.nom);
    console.log("Color chien = " + this.color);
    console.log("Nbre Pattes chien = " + this.nbre_pattes);
    console.log("Age chien = " + this.age);
    console.log("Type chien = " + this.type);
  }
}

const ricky = new Animal("Rick", "bleu", 4, 5);
ricky.direBonjour();
console.log("Le nom de l'animal: " + ricky.nom);
ricky.nom = "Jick";
console.log("Le nom de l'animal: " + ricky.nom);

const monChien = new Chien("Pick", "noir", 4, 10, "type");
monChien.aboyer();
// monChien.afficherInfosChiens();

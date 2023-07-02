const readline = require('readline');
const _ = require('lodash');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Crée une interface de readline pour lire les entrées utilisateur

// Demande le prénom de l'étudiant
rl.question("Entrez votre prénom: ", (prenom) => {
  // Demande le nom de l'étudiant
  rl.question("Entrez votre nom: ", (nom) => {
    // Demande les notes de l'étudiant séparées par des virgules
    rl.question("Entrez vos notes, séparées par des virgules (ex : 15,18,16): ", (notes) => {
      // Crée un objet étudiant avec les informations fournies
      let etudiant = {
        prenom: prenom,
        nom: nom,
        notes: notes.split(",").map(Number), // Convertit les notes en tableau de nombres
        moyenne: function() {
          let somme = this.notes.reduce((a, b) => a + b, 0); // Calcule la somme des notes
          return somme / this.notes.length; // Calcule la moyenne
        }
      };

      // Affiche la moyenne de l'étudiant
      console.log("La moyenne de", etudiant.prenom, etudiant.nom, "est :", etudiant.moyenne());

      // Affiche la note la plus élevée
      console.log("La note la plus élevée est : " + Math.max(...etudiant.notes));

      // Appelle la fonction compareNumbers pour comparer les deux premières notes
      console.log("Le résultat de la comparaison des deux premières notes est (retourne le plus grande):", compareNumbers(etudiant.notes[0], etudiant.notes[1]));

      // Calcule la factorielle du nombre total de notes
      console.log("La factorielle du nombre total de notes est : " + factorielle(etudiant.notes.length));
      
      // Crée un Set avec les notes de l'étudiant et vérifie si la note 10 est présente
      let notesSet = new Set(etudiant.notes);
      console.log("La note 10 est présente : " + notesSet.has(10));

      // Crée une Map associant le nom de l'étudiant à ses notes
      let etudiantsMap = new Map();
      etudiantsMap.set(etudiant.nom, etudiant.notes);
      console.log("Les notes de " + etudiant.nom + " sont : " + etudiantsMap.get(etudiant.nom));

      // Utilise Lodash pour calculer la moyenne des notes
      console.log("La moyenne calculée avec Lodash est : " + _.mean(etudiant.notes));

      // Mélange les trois premières notes de l'étudiant
      let array = [etudiant.notes[0], etudiant.notes[1], etudiant.notes[2]];
      let shuffled = _.shuffle(array);
      console.log("Avant le mélange : " + array);
      console.log("Après le mélange : " + shuffled);
      
      rl.close(); // Ferme l'interface de readline
    });
  });
});

// Fonction pour comparer deux nombres et renvoyer le plus grand ou une égalité
function compareNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "Les nombres sont égaux";
  }
}

// Fonction pour calculer la factorielle d'un nombre
function factorielle(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorielle(n - 1);
  }
}

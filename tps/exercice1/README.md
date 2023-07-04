# Les bases en JavaScript

Cet exercice vous permettra de mettre en pratique vos compétences en JavaScript. Le but de l'exercice est de créer un programme JavaScript qui gère les informations et les opérations sur les étudiants. Le programme permettra à l'utilisateur d'entrer les informations d'un étudiant (prénom, nom, notes) et d'effectuer des opérations telles que le calcul de la moyenne, la recherche de la note la plus élevée, etc.

## Instructions

0. Dans cette exercice, vous allez utiliser `Node.js` et `npm` pour gérer et exécuter notre programme. Assurez-vous d'avoir npm installé en utilisant la commande `npm -v` dans un terminal (cmd).

1. Ouvrez le fichier `exercice.js` avec l'IDE vscode.
    - Initialisez le projet en exécutant la commande suivante dans votre terminal : `npm init -y`, si c'est pas encore fait. Cela va créer un fichier `package.json` qui contiendra les informations sur votre projet.

2. Dans votre terminal, exécutez la commande suivante pour installer le package `lodash`: `npm install lodash` 
Cela va installer lodash et mettre à jour votre fichier package.json avec les informations de dépendance.

3. Utilisez la fonction `readline()` l'équivalent de `prompt()` pour demander à l'utilisateur d'entrer le prénom, le nom et les notes de l'étudiant separés par des virgules (ex. 15,16,12). Utilisez les fonctions `split` et `map` pour convertir la chaîne de notes en un tableau de nombres.
    - Créez un objet etudiant avec les propriétés prenom, nom et notes.
    - Ajoutez une méthode moyenne à l'objet `etudiant` pour calculer la moyenne des notes en utilisant la fonction `reduce` pour additionner les notes et la propriété `length`pour obtenir le nombre de notes.
    - Utilisez la fonction `Math.max` avec l'opérateur de déconstruction `...` pour trouver la note la plus élevée dans le tableau de notes.

4. Créez une fonction `compareNumbers` qui prend deux nombres en paramètres et renvoie le plus grand des deux ou une égalité.
Testez la fonction en comparant les deux premières notes de l'étudiant.

5. Créez une fonction factorielle qui calcule la factorielle d'un nombre en utilisant une récursion. Testez la fonction en calculant la factorielle du nombre total de notes de l'étudiant.

6. Créez un ensemble `Set` avec les notes de l'étudiant et utilisez la méthode `has` pour vérifier si une note spécifique (par exemple, 10) est présente dans l'ensemble.

7. Créez une table de hachage `Map` pour associer le nom de l'étudiant à ses notes.
    - Utilisez la méthode `set`pour ajouter une entrée à la table de hachage.
    - Utilisez la méthode `get` pour récupérer les notes de l'étudiant à partir de son nom.
    - Utilisation de `lodash` pour mélanger les notes
    - Utilisez la fonction shuffle de lodash pour mélanger les notes de l'étudiant.

8. Utilisez la command `node exercice.js` pour exécuter votre code dans votre invite de commande et appreciez le résultat en ligne de commande.
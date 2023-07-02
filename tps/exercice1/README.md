# Les bases en JavaScript

Cet exercice vous permettra de mettre en pratique vos compétences en JavaScript. Le but de l'exercice est de créer un programme JavaScript qui gère les informations et les opérations sur les étudiants. Le programme permettra à l'utilisateur d'entrer les informations d'un étudiant (prénom, nom, notes) et d'effectuer des opérations telles que le calcul de la moyenne, la recherche de la note la plus élevée, etc.

## Instructions sans utilisation de npm
Dans cette partie, vous allez effectuer l'exercice, en utilisant uniquement JavaScript. Vous n'aurez pas besoin de Node.js et npm pour exécuter et gérer le programme, mais vous utiliserez les fonctionnalités intégrées de JavaScript.

1. Assurez-vous d'avoir npm installé en utilisant la commande `npm -v` dans un terminal (cmd). Ouvrez un terminal et naviguez vers votre dossier de travail. Tapez la commande `npm install lodash` pour installer la bibliothèque Lodash.

2. Dans le fichier `exercice1.html` à l'intérieur des balises `<script> </script>`, utilisez la fonction `prompt()` pour demander à l'utilisateur d'entrer son prénom, nom et notes. Les notes doivent être entrées comme une chaîne de caractères avec chaque note séparée par une virgule (ex : "15,18,16").

3. Utilisez les informations entrées pour créer un objet JavaScript appelé `etudiant`.

    - L'objet doit avoir trois propriétés : `prenom`, `nom` et `notes`. La propriété `notes` doit être un tableau de nombres. Vous pouvez utiliser `split(",")` pour diviser la chaîne de caractères des notes en un tableau, puis `map(Number)` pour convertir chaque note en nombre.
    - Ajoutez une méthode de calcul de la moyenne des notes. La méthode doit renvoyer la moyenne des notes de l'étudiant. Pour cela, vous pouvez sommer toutes les notes à l'aide de la fonction `reduce()` puis diviser le résultat par le nombre total de notes.
    - Utilisez la fonction `Math.max` pour afficher la note la plus élevée avec `console.log`. Testez votre objet en affichant la moyenne comme suit :
    ```javascript 
    console.log("La moyenne de", etudiant.prenom, etudiant.nom, "est :", etudiant.moyenne());`

4. Créez une fonction `compareNumbers` qui doit prendre deux nombres en arguments et renvoyer le plus grand. Si les deux nombres sont égaux, elle doit renvoyer le message "Les nombres sont égaux". Testez cette fonction avec les deux premières notes saisies en affichant un message comme suit :
   ```javascript
   console.log("Le résultat de la comparaison des deux premières notes est :", compareNumbers(note1, note2));`
   
5. Écrivez une fonction factorielle qui doit prendre un nombre en argument et renvoyer sa factorielle. Utilisez cette fonction pour calculer et afficher la factorielle du nombre total de notes que l'étudiant a obtenues. Affichez le résultat comme suit :
    ```javascript
    console.log("La factorielle du nombre total de notes est : " + factorielle(etudiant.notes.length));`

6. Créez un nouvel objet Set et ajoutez-y toutes les notes de l'étudiant. Utilisez ensuite la méthode `has()` pour vérifier si la note 10 est présente. Utilisez aussi `instanceof` pour vérifier que votre variable est bien de type `set`.

7. Créez un nouvel objet `Map` associant le nom de l'étudiant à ses notes. Utilisez ensuite la méthode `get()` pour récupérer et afficher les notes de l'étudiant avec console.log.

8. Lodash propose une fonction `mean()` qui calcule la moyenne d'un tableau de nombres. Utilisez cette fonction pour calculer la moyenne des notes de l'étudiant et comparez le résultat avec celui obtenu avec votre propre méthode moyenne en utilisant console.log.

## Instructions avec utilisation de npm

Dans cette partie, vous allez effectuer la même tâche que précédemment, mais cette fois-ci en utilisant npm. Vous allez utiliser Node.js et npm pour exécuter et gérer notre programme.


1. Ouvrez le fichier `exercice.js` avec votre éditeur de texte.
    - Initialisez le projet en exécutant la commande suivante dans votre terminal : `npm init -y` Cela va créer un fichier `package.json` qui contiendra les informations sur votre projet.

2. Dans votre terminal, exécutez la commande suivante pour installer le package `npm init -y` : `npm install lodash` 
Cela va installer lodash et mettre à jour votre fichier package.json avec les informations de dépendance.

3. Utilisez la fonction `readline` pour demander à l'utilisateur d'entrer le prénom, le nom et les notes de l'étudiant. Utilisez les fonctions `split` et `map` pour convertir la chaîne de notes en un tableau de nombres.
    - Créez un objet etudiant avec les propriétés prenom, nom et notes.
    - Ajoutez une méthode moyenne à l'objet `etudiant` pour calculer la moyenne des notes en utilisant la fonction `reduce` pour additionner les notes et la propriété `length`pour obtenir le nombre de notes.
    - Utilisez la fonction Math.max avec l'opérateur de déconstruction `...` pour trouver la note la plus élevée dans le tableau de notes.

4. Créez une fonction `compareNumbers` qui prend deux nombres en paramètres et renvoie le plus grand des deux ou une égalité.
Testez la fonction en comparant les deux premières notes de l'étudiant.

5. Créez une fonction factorielle qui calcule la factorielle d'un nombre en utilisant une récursion. Testez la fonction en calculant la factorielle du nombre total de notes de l'étudiant.

6. Créez un ensemble `Set` avec les notes de l'étudiant et utilisez la méthode `has` pour vérifier si une note spécifique (par exemple, 10) est présente dans l'ensemble.

7. Créez une table de hachage `Map` pour associer le nom de l'étudiant à ses notes.
    - Utilisez la méthode `set`pour ajouter une entrée à la table de hachage.
    - Utilisez la méthode `get` pour récupérer les notes de l'étudiant à partir de son nom.
    - Utilisation de `lodash` pour mélanger les notes
    - Utilisez la fonction shuffle de lodash pour mélanger les notes de l'étudiant.

8. Utilisez la command `node exercice.js` pour exécuter votre code dans votre invite de commande.
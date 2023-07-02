## Manipulation du DOM

### A. Changement de couleurs 
Créez un fichier HTML nommé `changement_couleurs.html`.
1. Créez la structure de base de votre codeen ajoutant les balises `<html>`, `<head>` et `<body>`.
2. À l'intérieur de la balise `<body>`, créez trois boutons en utilisant la balise `<button>` avec les textes "Rouge", "Vert" et "Bleu".
3. Ajoutez un identifiant unique à chaque bouton. Par exemple, attribuez l'identifiant "rouge-btn" au bouton "Rouge", "vert-btn" au bouton "Vert" et "bleu-btn" au bouton "Bleu".
4. Ajoutez un attribut `onclick` à chaque bouton pour appeler une fonction JavaScript correspondante lorsqu'il est cliqué. Par exemple, pour le bouton "Rouge", vous pouvez ajouter `onclick="changerCouleur('red')"`. Répétez cette étape pour les deux autres boutons en utilisant les couleurs appropriées.
5. Dans la balise `<script>`, définissez la fonction `changerCouleur(couleur)` qui prend en paramètre la couleur sélectionnée.
6. À l'intérieur de la fonction `changerCouleur(couleur)`, utilisez `document.body.style.backgroundColor` pour changer la couleur de fond de la page en utilisant la couleur passée en paramètre.
7. Vérifier le résultat. Lorsque vous cliquez sur l'un des boutons, la couleur de fond de la page doit changer en fonction de la couleur sélectionnée.

### B. Menu dynamique
1. Créez un fichier HTML nommé `menu_dynamique.html`. en rajoutant les balises `<html>`, `<head>` et `<body>`.
2. À l'intérieur de la balise `<body>`, créez un bouton avec le texte "Menu".
3. Ajoutez un identifiant unique au bouton, par exemple, attribuez l'identifiant `"menu-btn"` au `bouton`.
4. Ajoutez un attribut `onclick` au bouton pour appeler une fonction JavaScript lorsque le bouton est cliqué. Par exemple, vous pouvez ajouter `onclick="toggleMenu()`".
5. À l'intérieur de la balise `<head>`, ajoutez une balise `<script>` pour inclure le code JavaScript.
6. Dans la balise `<script>`, définissez la fonction `toggleMenu()`.
7. À l'intérieur de la fonction `toggleMenu()`, utilisez `document.getElementById` pour récupérer l'élément du menu (par exemple, `<ul>`).
8. Utilisez la propriété `style.display` de l'élément du menu pour changer sa visibilité. Si `style.display` est initialement défini sur `"none"`, changez-le en `"block"` pour afficher le menu. Sinon, changez-le en `"none"` pour masquer le menu.
9. Enregistrez le fichier HTML et ouvrez-le dans un navigateur. Lorsque vous cliquez sur le bouton `"Menu"`, le menu doit s'afficher ou se cacher en fonction de son état actuel.

### C. Déplacement d'images
1. Créez un fichier `deplacement_images.html` et rajouter du code HTML.
2. À l'intérieur de la balise `<body>`, ajouez une balise `<img>` pour afficher une image de votre choix. Assurez-vous d'attribuer un identifiant unique à l'image, par exemple, attribuez l'identifiant `"image"` à l'élément `<img>`.
3. Ajoutez deux boutons avec les textes `"Gauche"` et `"Droite"`.
4. Attribuez un identifiant unique à chaque bouton, par exemple, attribuez l'identifiant `"gauche-btn"` au bouton `"Gauche"` et `"droite-btn"` au bouton `"Droite"`.
5. Ajoutez un attribut `onclick`aque bouton pour appeler une fonction JavaScript correspondante lorsqu'il est cliqué. Par exemple, pour le bouton `"Gauche"`, vous pouvez ajouter `onclick="deplacerImage('gauche')"`. Répétez cette étape pour le bouton `"Droite"` en utilisant `'droite'` comme paramètre.
6. À l'intérieur de la balise `<head>`, ajoutez une balise `<script>` pour inclure le code JavaScript.
7. Dans la balise `<script>`, définissez la fonction `deplacerImage(direction)` qui prend en paramètre la direction du déplacement.
8. À l'intérieur de la fonction `deplacerImage(direction)`, utilisez `document.getElementById` pour récupérer l'élément de l'image.
9. Utilisez la propriété `style.left` de l'élément de l'image pour modifier sa position horizontale. Par exemple, si la direction est `"gauche"`, vous pouvez déplacer l'image de 50 pixels vers la gauche en utilisant `-= 50`. Si la direction est `"droite"`, vous pouvez déplacer l'image de 50 pixels vers la droite en utilisant `+= 50`.
10. Enregistrez le fichier HTML et ouvrez-le dans un navigateur. Lorsque vous cliquez sur les boutons "Gauche" et "Droite", l'image doit se déplacer horizontalement en conséquence.

### D. Modification d'attributs
1. Créez un fichier HTML nommé `modification_attributs.html` et créez une structure de base en ajoutant les balises `<html>`, `<head>` et `<body>`.
2. À l'intérieur de la balise `<body>`, créez une liste d'éléments en utilisant la balise `<ul>`. Ajoutez plusieurs éléments `<li>` à l'intérieur de la balise `<ul>`. Vous pouvez mettre n'importe quel texte dans les éléments de la liste.
3. Ajoutez un bouton avec le texte "Gras".
4. Attribuez un identifiant unique au bouton, par exemple, attribuez l'identifiant "gras-btn" au bouton.
5. Ajoutez un attribut `onclick` au bouton pour appeler une fonction JavaScript lorsque le bouton est cliqué. Par exemple, vous pouvez ajouter `onclick="modifierAttributGras()"`.
6. À l'intérieur de la balise `<head>`, ajoutez une balise `<script>` pour inclure le code JavaScript.
7. Dans la balise `<script>`, définissez la fonction `modifierAttributGras()`.
8. À l'intérieur de la fonction `modifierAttributGras()`, utilisez `document.querySelectorAl`l pour récupérer tous les éléments de la liste.
9. Parcourez les éléments de la liste à l'aide d'une boucle et utilisez la propriété `style.fontWeight` pour changer le style en gras ("bold") ou normal ("normal") en fonction de l'état actuel.
10. Enregistrez le fichier HTML et ouvrez-le dans un navigateur. Lorsque vous cliquez sur le bouton "Gras", tous les éléments de la liste doivent être affichés en gras ou revenir à un style normal.

### E. Manipulation avec querySelectorAll
1. Créez un fichier HTML nommé `manip_query_selector_all.html` et rajoutez la structure de base de base HTML.
2. À l'intérieur de la balise `<body>`, créez plusieurs éléments ayant la même classe. Par exemple, vous pouvez utiliser des balises `<div>` avec une classe `"element"`.
3. Ajoutez un bouton avec le texte `"Changer de couleur"`.
4. Attribuez un identifiant unique au bouton, par exemple, attribuez l'identifiant "couleur-btn" au bouton.
5. Ajoutez un attribut `onclick` au bouton pour appeler une fonction JavaScript lorsque le bouton est cliqué. Vous pouvez ajouter `onclick="changerCouleurElements()"`.
6. Dans la balise `<script>`, définissez la fonction `changerCouleurElements()`.
7. À l'intérieur de la fonction `changerCouleurElements()`, utilisez `document.querySelectorAll` pour récupérer tous les éléments ayant la classe `"element"`
8. Parcourez les éléments récupérés à l'aide d'une boucle et utilisez la propriété `style.color` pour changer la couleur du texte en utilisant la couleur de votre choix.
9. Testez votre code.
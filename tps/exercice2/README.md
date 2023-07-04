## Manipulation du DOM

### A. Menu dynamique
1. Créez un fichier HTML nommé `1_menu_dynamique.html`. en rajoutant les balises `<html>`, `<head>` et `<body>`.
2. À l'intérieur de la balise `<body>`, créez un bouton avec le texte "Menu".
3. Ajoutez un identifiant unique au bouton, par exemple, attribuez l'identifiant `"menu-btn"` au `bouton`.
4. Ajoutez un attribut `onclick` au bouton pour appeler une fonction JavaScript lorsque le bouton est cliqué. Par exemple, vous pouvez ajouter `onclick="toggleMenu()`".
5. À l'intérieur de la balise `<head>`, ajoutez une balise `<script>` pour inclure le code JavaScript.
6. Dans la balise `<script>`, définissez la fonction `toggleMenu()`.
7. À l'intérieur de la fonction `toggleMenu()`, utilisez `document.getElementById` pour récupérer l'élément du menu (par exemple, `<ul>`).
8. Utilisez la propriété `style.display` de l'élément du menu pour changer sa visibilité. Si `style.display` est initialement défini sur `"none"`, changez-le en `"block"` pour afficher le menu. Sinon, changez-le en `"none"` pour masquer le menu.
9. Enregistrez le fichier HTML et ouvrez-le dans un navigateur. Lorsque vous cliquez sur le bouton `"Menu"`, le menu doit s'afficher ou se cacher en fonction de son état actuel.

### B. Modification d'attributs
1. Créez un fichier HTML nommé `2_modification_attributs.html` et créez une structure de base en ajoutant les balises `<html>`, `<head>` et `<body>`.
2. À l'intérieur de la balise `<body>`, créez une liste d'éléments en utilisant la balise `<ul>`. Ajoutez plusieurs éléments `<li>` à l'intérieur de la balise `<ul>`. Vous pouvez mettre n'importe quel texte dans les éléments de la liste.
3. Ajoutez un bouton avec le texte "Gras".
4. Attribuez un identifiant unique au bouton, par exemple, attribuez l'identifiant "gras-btn" au bouton.
5. Ajoutez un attribut `onclick` au bouton pour appeler une fonction JavaScript lorsque le bouton est cliqué. Par exemple, vous pouvez ajouter `onclick="modifierAttributGras()"`.
6. À l'intérieur de la balise `<head>`, ajoutez une balise `<script>` pour inclure le code JavaScript.
7. Dans la balise `<script>`, définissez la fonction `modifierAttributGras()`.
8. À l'intérieur de la fonction `modifierAttributGras()`, utilisez `document.querySelectorAl`l pour récupérer tous les éléments de la liste.
9. Parcourez les éléments de la liste à l'aide d'une boucle et utilisez la propriété `style.fontWeight` pour changer le style en gras ("bold") ou normal ("normal") en fonction de l'état actuel.
10. Enregistrez le fichier HTML et ouvrez-le dans un navigateur. Lorsque vous cliquez sur le bouton "Gras", tous les éléments de la liste doivent être affichés en gras ou revenir à un style normal.
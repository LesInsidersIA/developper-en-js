Exercice 7 : Changement de couleurs 
Créez une page HTML avec trois boutons : "Rouge", "Vert" et "Bleu". Lorsque l'utilisateur clique sur un bouton, la couleur de fond de la page change en fonction du bouton cliqué.
HTML
<button id="red">Rouge</button>
<button id="green">Vert</button>
<button id="blue">Bleu</button>
JS
document.getElementById('red').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
document.getElementById('green').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});
document.getElementById('blue').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});
Exercice 8 : Menu dynamique 
Créez une page HTML avec un menu déroulant. Lorsque l'utilisateur clique sur le bouton du menu, le menu s'affiche. Lorsqu'il clique à nouveau sur le bouton, le menu se cache.
HTML :
<button id="toggleMenu">Menu</button>
<ul id="menu" style="display: none;">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
JS
document.getElementById('toggleMenu').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
Exercice 9 :Déplacement d'images 
Créez une page HTML avec une image. Ajoutez deux boutons : "Gauche" et "Droite". Lorsque l'utilisateur clique sur le bouton "Gauche", l'image se déplace de 50 pixels vers la gauche. Lorsqu'il clique sur le bouton "Droite", l'image se déplace de 50 pixels vers la droite.
HTML :
<img id="image" src="image.jpg" style="position: absolute; left: 0;">
<button id="left">Gauche</button>
<button id="right">Droite</button>
JS
document.getElementById('left').addEventListener('click', function() {
    let image = document.getElementById('image');
    image.style.left = (parseInt(image.style.left) - 50) + 'px';
});
document.getElementById('right').addEventListener('click', function() {
    let image = document.getElementById('image');
    image.style.left = (parseInt(image.style.left) + 50) + 'px';
});
Exercice 10 : Modification d'attributs 
Créez une page HTML avec une liste d'éléments. Ajoutez un bouton "Gras". Lorsque l'utilisateur clique sur ce bouton, tous les éléments de la liste sont affichés en gras.
HTML
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<button id="bold">Gras</button>
JS
document.getElementById('bold').addEventListener('click', function() {
    let listItems = document.getElementById('list').querySelectorAll('li');
    listItems.forEach(function(item) {
        item.style.fontWeight = 'bold';
    });
});
Exercice 11 : Manipulation avec querySelectorAll
Créez une page HTML avec plusieurs éléments ayant la même classe. Ajoutez un bouton "Changer de couleur". Lorsque l'utilisateur clique sur ce bouton, tous les éléments ayant cette classe changent de couleur.
HTML
<div class="changeColor">Texte 1</div>
<div class="changeColor">Texte 2</div>
<div class="changeColor">Texte 3</div>
<button id="changeColor">Changer de couleur</button>
JS
document.getElementById('changeColor').addEventListener('click', function() {
    let elements = document.querySelectorAll('.changeColor');
    elements.forEach(function(element) {
        element.style.color = 'red';
    });
});

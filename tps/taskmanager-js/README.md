# Projet AJAX avec Lodash et localStorage

Ceci est un guide de configuration de base pour lancer un projet utilisant AJAX avec Lodash et localStorage.

## Prérequis

- Node.js et npm doivent être installés sur votre système.

## Premiers pas

1. Créez le répertoire de votre projet.

2. Initialisez npm dans le répertoire du projet :
   ```shell
   npm init

3. Installez les dépendances :
    ```npm install axios lodash

4. Créez un fichier HTML (par exemple, index.html) et ajoutez la structure HTML nécessaire :
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Gestionnaire de tâches</title>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <div id="taskContainer">
            <h1>Gestionnaire de tâches</h1>

            <!-- Ajout d'un paragraphe pour afficher une citation -->
            <p id="quote"></p>

            <!-- Le formulaire pour l'entrée des tâches -->
            <form id="taskForm">
                <input type="text" id="task-input" placeholder="Nouvelle tâche">
                <button type="submit" id="add-task-button">Ajouter</button>
            </form>

            <!-- La liste pour afficher les tâches -->
            <ul id="taskList"></ul>
        </div>

        <!-- Le script JavaScript qui gère la logique de l'application -->
        <script src="js/app.js"></script>
    </body>
    </html>

5. Créez un fichier JavaScript (par exemple, app.js) et écrivez votre code utilisant AJAX, Lodash et localStorage à l'intérieur :
    ```js
    // Inclure les modules nécessaires
    var axios = require('axios');
    var _ = require('lodash');

    // Votre code ici

6. Pour lancer le projet, si vous préférez utiliser un serveur de développement, vous pouvez installer http-server globalement :
    ```shell 
    npm install -g http-server

7. Démarrez le serveur en exécutant la commande : 
    ```shell 
    http-server

8. Accédez à votre projet à l'URL fournie (généralement http://localhost:8080).
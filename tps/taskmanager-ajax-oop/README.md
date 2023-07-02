# Projet jQuery

Guide de configuration de base pour lancer un projet jQuery en utilisant npm.

## Prérequis

- Node.js et npm doivent être installés sur votre système.

## Premiers pas

1. Créez le répertoire de votre projet.

2. Initialisez npm dans le répertoire du projet :
   npm init

3. Installez jQuery :
   npm install jquery

4. Créez un fichier HTML (par exemple, index.html) et ajoutez la structure HTML nécessaire :
   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Gestionnaire de tâches</title>
      <script src="node_modules/jquery/dist/jquery.min.js"></script>
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


5. Créez un fichier JavaScript (par exemple, app.js) et écrivez votre code jQuery à l'intérieur :

    ```js 
    $(document).ready(function() {
    // Votre code jQuery ici
    });

6. Lancez le projet : Si vous préférez utiliser un serveur de développement, vous pouvez installer http-server globalement : 
    ```shell 
    npm install -g http-server

7. Démarrez le serveur en exécutant la commande : 
    ```shell 
    http-server

8. Accédez à votre projet à l'URL fournie (généralement http://localhost:8080).
// Sélection des éléments du DOM
const taskInput = document.getElementById('task-input'); // Input pour l'entrée de la tâche
const addTaskButton = document.getElementById('add-task-button'); // Bouton d'ajout de tâche
const taskList = document.getElementById('taskList'); // Liste de tâches

// Fonction pour générer une tâche dans le DOM
function generateTask(taskTextContent, isDone) {
  // Création des éléments de la tâche
  const newTask = document.createElement('li'); // Élément <li> pour représenter une tâche
  const taskContent = document.createElement('div'); // Conteneur pour le contenu de la tâche
  const taskControls = document.createElement('div'); // Conteneur pour les contrôles de la tâche
  const checkbox = document.createElement('input'); // Checkbox pour marquer la tâche comme terminée
  const deleteButton = document.createElement('button'); // Bouton de suppression de la tâche

  // Attribution des classes CSS
  taskContent.classList.add('task-content'); // Classe CSS pour le contenu de la tâche
  taskControls.classList.add('task-controls'); // Classe CSS pour les contrôles de la tâche

  // Configuration de la checkbox
  checkbox.type = 'checkbox'; // Type de la checkbox
  checkbox.checked = isDone; // Coche la checkbox si la tâche est terminée
  checkbox.addEventListener('change', function() {
    taskContent.classList.toggle('done'); // Ajoute ou retire la classe 'done' pour indiquer l'état de la tâche
    saveTasks(); // Sauvegarde les tâches dans le localStorage
  });

  // Configuration du bouton de suppression
  deleteButton.textContent = 'Supprimer'; // Texte du bouton de suppression
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(newTask); // Supprime la tâche de la liste
    saveTasks(); // Sauvegarde les tâches dans le localStorage
  });

  // Ajout du contenu à la tâche
  const taskText = document.createTextNode(taskTextContent); // Contenu textuel de la tâche
  taskContent.appendChild(taskText); // Ajoute le contenu à la tâche

  // Ajout des éléments à la tâche
  taskControls.appendChild(checkbox); // Ajoute la checkbox aux contrôles de la tâche
  taskControls.appendChild(deleteButton); // Ajoute le bouton de suppression aux contrôles de la tâche
  newTask.appendChild(taskContent); // Ajoute le contenu de la tâche à la tâche
  newTask.appendChild(taskControls); // Ajoute les contrôles de la tâche à la tâche

  return newTask; // Retourne la tâche générée
}

// Fonction pour sauvegarder les tâches dans localStorage
function saveTasks() {
  const tasks = [];

  for (let i = 0; i < taskList.children.length; i++) {
    const task = taskList.children[i];
    const taskContent = task.getElementsByClassName('task-content')[0].textContent;
    const isDone = task.getElementsByClassName('task-content')[0].classList.contains('done');

    tasks.push({ taskContent, isDone });
  }

  localStorage.setItem('tasks', JSON.stringify(tasks)); // Sauvegarde les tâches dans le localStorage
}

// Fonction pour charger les tâches depuis localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  for (const task of tasks) {
    const newTask = generateTask(task.taskContent, task.isDone);
    taskList.appendChild(newTask);
  }
}

// Ajout d'un écouteur d'événements au bouton d'ajout de tâche
addTaskButton.addEventListener('click', function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du bouton (soumission du formulaire)

  const taskText = taskInput.value.trim(); // Récupère le contenu de l'input en supprimant les espaces vides

  if (taskText !== '') {      // Vérifie si le champs de sais de tâche est vide
    const newTask = generateTask(taskText, false); // Génère une nouvelle tâche avec le contenu de l'input
    taskList.appendChild(newTask); // Ajoute la nouvelle tâche à la liste de tâches
    saveTasks(); // Sauvegarde les tâches dans le localStorage
    taskInput.value = ''; // Réinitialise l'input
    getRandomQuote(); // Obtient une nouvelle citation aléatoire
  }
});

// Chargement des tâches au chargement de la page
window.addEventListener('load', loadTasks);

// Fonction pour obtenir une citation aléatoire 
async function getRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random'); // Envoie une requête à l'API de citation
    const data = await response.json();
    const quote = data.content; // Contenu de la citation
    const author = data.author; // Auteur de la citation

    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = `"${quote}" - ${author}`; // Affiche la citation et l'auteur sur la page
  } catch (error) {
    console.error('Erreur:', error);
  }
}

// Obtention d'une citation aléatoire au chargement de la page
window.addEventListener('load', getRandomQuote);

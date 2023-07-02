// Classe pour représenter une tâche
class Task {
  constructor(taskTextContent, isDone) {
    this.taskTextContent = taskTextContent;
    this.isDone = isDone;
  }

  // Méthode pour générer la représentation DOM d'une tâche
  generateTaskElement() {
    // Création des éléments DOM
    const newTask = $('<li>');
    const taskContent = $('<div>').addClass('task-content');
    const taskControls = $('<div>').addClass('task-controls');
    const checkbox = $('<input>').attr('type', 'checkbox');
    const deleteButton = $('<button>').text('Supprimer');

    // Configuration de la checkbox
    checkbox.prop('checked', this.isDone);
    checkbox.on('change', () => {
      taskContent.toggleClass('done');
      this.isDone = taskContent.hasClass('done');
      this.save();
    });

    // Configuration du bouton de suppression
    deleteButton.on('click', () => {
      newTask.remove();
      this.delete();
    });

    // Ajout du contenu à la tâche
    const taskText = $('<span>').text(this.taskTextContent);
    taskContent.append(taskText);

    // Ajout des éléments à la tâche
    taskControls.append(checkbox, deleteButton);
    newTask.append(taskContent, taskControls);

    return newTask;
  }

  // Méthode pour sauvegarder la tâche dans localStorage
  save() {
    const tasks = Task.getAllTasks();
    tasks.push({ taskTextContent: this.taskTextContent, isDone: this.isDone });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Méthode pour supprimer la tâche de localStorage
  delete() {
    const tasks = Task.getAllTasks();
    const index = tasks.findIndex(task => task.taskTextContent === this.taskTextContent && task.isDone === this.isDone);
    if (index !== -1) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  // Méthode statique pour récupérer toutes les tâches de localStorage
  static getAllTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  // Méthode statique pour charger les tâches depuis localStorage
  static loadTasks() {
    const tasks = Task.getAllTasks();
    for (const task of tasks) {
      const newTask = new Task(task.taskTextContent, task.isDone);
      const taskElement = newTask.generateTaskElement();
      $('#taskList').append(taskElement);
    }
  }
}

// Ajout d'un écouteur d'événements au bouton d'ajout de tâche
$('#add-task-button').on('click', function(event) {
  event.preventDefault();

  const taskText = $('#task-input').val().trim();

  if (taskText !== '') {
    const newTask = new Task(taskText, false);
    const taskElement = newTask.generateTaskElement();
    $('#taskList').append(taskElement);
    newTask.save();
    $('#task-input').val('');
    getRandomQuote();
  }
});

// Chargement des tâches au chargement de la page
$(window).on('load', function() {
  Task.loadTasks();
});

// Fonction pour obtenir une citation aléatoire en utilisant AJAX
function getRandomQuote() {
  $.ajax({
    url: 'https://api.quotable.io/random',
    method: 'GET',
    success: function(data) {
      const quote = data.content;
      const author = data.author;
      $('#quote').text(`"${quote}" - ${author}`);
    },
    error: function(error) {
      console.error('Erreur:', error);
    }
  });
}

// Obtention d'une citation aléatoire au chargement de la page
$(window).on('load', function() {
  getRandomQuote();
});

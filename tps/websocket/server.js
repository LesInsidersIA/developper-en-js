// server.js

const WebSocket = require('ws');

// Crée une nouvelle instance du serveur WebSocket en écoutant le port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Événement déclenché lorsqu'un client se connecte
wss.on('connection', function connection(ws) {
  // Événement déclenché lorsqu'un message est reçu du client
  ws.on('message', function incoming(message) {
    console.log('Reçu du client :', message);
    // Envoie d'une réponse au client
    ws.send('Réponse du serveur : ' + message);
  });
});
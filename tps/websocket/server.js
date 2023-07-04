// server.js

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Événement déclenché lorsqu'un client se connecte
wss.on('connection', function connection(ws) {
  // Événement déclenché lorsqu'un message est reçu du client
  ws.on('message', function incoming(message) {
    console.log('Reçu du client :', message);
    ws.send('Réponse du serveur : ' + message);
  });
});
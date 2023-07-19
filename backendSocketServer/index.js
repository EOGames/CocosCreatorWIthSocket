const app = require('express')();
const http = require('http').createServer(app);
//const io = require('socket.io')(http);
const cors = require('cors');

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:7456",
    methods: ["GET", "POST"]
  }
});


// Listen for incoming connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for chat messages
  socket.on('chat message', (message) =>
  {
    console.log('Received message:', message);
    
    // Broadcast the message to all connected clients
    io.emit('fromServer','Hey from server');
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
//,`127.0.0.1`
// Start the server
http.listen(5000, () => {
  //console.log('Server listening on *:127.0.0.1:5000');
  console.log('Server listening on *:5000');
  
});


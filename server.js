const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    socket.on('chat message', (message) => {
        io.emit('chat message', message); // Broadcast the message to all connected clients
    });
});

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});

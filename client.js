$(document).ready(() => {
    const socket = io();

    $('#send').click(() => {
        const message = $('#message').val();
        if (message.trim() !== '') {
            socket.emit('chat message', message);
            $('#message').val('');
        }
    });

    socket.on('chat message', (message) => {
        $('#messages').append($('<p>').text(message));
    });
});

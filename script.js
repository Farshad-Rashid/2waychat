const socket = io();

// Function to display chat messages
function displayMessage(message) {
  const messageContainer = document.getElementById('message-container');
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  if (message) {
    socket.emit('chat-message', message);
    messageInput.value = '';
  }
}

// Display received messages
socket.on('chat-message', (message) => {
  displayMessage(`Other User: ${message}`);
});

// Event listener for sending a message
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);

// Event listener for Enter key press in the message input
const messageInput = document.getElementById('message-input');
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

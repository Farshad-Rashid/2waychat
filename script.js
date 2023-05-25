// Client-side JavaScript

document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    messageInput.value = "";

    // Send the message to the server
    fetch("/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });
});

// Function to append a new message to the list
function appendMessage(message) {
    const messagesList = document.getElementById("messagesList");
    const li = document.createElement("li");
    li.textContent = message;
    messagesList.appendChild(li);
}

// Function to retrieve messages from the server
function getMessages() {
    fetch("/messages")
        .then((response) => response.json())
        .then((data) => {
            const messages = data.messages;
            const messagesList = document.getElementById("messagesList");
            messagesList.innerHTML = ""; // Clear the list

            messages.forEach((message) => {
                appendMessage(message);
            });
        });
}

// Fetch messages every 2 seconds
setInterval(getMessages, 2000);

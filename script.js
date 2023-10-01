function sendMessage() {
    const inputElem = document.getElementById("userInput");
    const message = inputElem.value;

    // Append user message to chat
    appendMessage(message, "user");

    // Clear the input
    inputElem.value = "";

    // set reply for now 
    setTimeout(() => {
        appendMessage("Hello! How can I assist you with your reservation?", "bot");
    }, 1000);
}

function appendMessage(message, sender) {
    const chatBox = document.querySelector(".chat-box");
    const msgElem = document.createElement("div");
    msgElem.className = sender;
    msgElem.innerText = message;
    chatBox.appendChild(msgElem);
}

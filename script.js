// import API_KEY from "./api_key.js";

const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");

let API_URL = "https://api.openai.com/v1/chat/completions";
// let API_KEY = //insert key here;

// Define the sendMessage function
function sendMessage() {
  if (messageBar.value.length > 0) {
    const UserTypedMessage = messageBar.value;
    messageBar.value = "";
    let message = `<div class="chat message"> <img src="img/user.jpg"> <span> ${UserTypedMessage} </span> </div>`;
    let response = `<div class="chat response"> <img src="img/chatbot.jpg"> <span class= "new">... </span> </div>`;
    messageBox.insertAdjacentHTML("beforeend", message);
    setTimeout(() => {
      messageBox.insertAdjacentHTML("beforeend", response);
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": UserTypedMessage}]
        })
      };
      fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => {
          const ChatBotResponse = document.querySelector(".response .new");
          ChatBotResponse.innerHTML = data.choices[0].message.content; // Ensure this matches the API response structure
          ChatBotResponse.classList.remove("new");
        })
        .catch((error) => {
          const ChatBotResponse = document.querySelector(".response .new");
          ChatBotResponse.innerHTML = "Oops! An error occurred. Please try again";
        });
    }, 100);
  }
}

// Assign sendMessage to the button's onclick event
sendBtn.onclick = sendMessage;

// Add an event listener for the Enter key in the input field
messageBar.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default action to avoid form submission
    sendMessage();
  }
});
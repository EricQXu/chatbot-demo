document.getElementById('send-btn').addEventListener('click', async () => {
  const userInput = document.getElementById('user-input');
  const message = userInput.value;
  userInput.value = ''; // Clear input field

  updateChatArea('user', message); // Update chat area with user message

  try {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    updateChatArea('bot', data.message); // Update chat area with ChatGPT response
  } catch (error) {
    console.error('Error:', error);
  }
});

function updateChatArea(sender, message) {
  const chatArea = document.getElementById('chat-area');
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatArea.appendChild(messageElement);
}
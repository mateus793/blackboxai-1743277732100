// Confirmation Page Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Chat functionality
    const chatInput = document.querySelector('.chat-input input');
    const chatSendBtn = document.querySelector('.chat-input button');
    const chatMessages = document.querySelector('.chat-messages');

    if (chatInput && chatSendBtn && chatMessages) {
        chatSendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        function sendMessage() {
            const message = chatInput.value.trim();
            if (message) {
                // Add message to chat
                const messageElement = document.createElement('div');
                messageElement.className = 'message sent';
                messageElement.innerHTML = `
                    <p>${message}</p>
                    <span class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                `;
                chatMessages.appendChild(messageElement);
                chatInput.value = '';
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Simulate reply after 1-3 seconds
                setTimeout(simulateReply, 1000 + Math.random() * 2000);
            }
        }

        function simulateReply() {
            const replies = [
                "Claro, sem problemas!",
                "Pode deixar que combinamos isso.",
                "Sim, ainda tenho vagas disponíveis.",
                "Vou te esperar no ponto combinado.",
                "Perfeito! Nos vemos então."
            ];
            const reply = replies[Math.floor(Math.random() * replies.length)];
            
            const messageElement = document.createElement('div');
            messageElement.className = 'message received';
            messageElement.innerHTML = `
                <p>${reply}</p>
                <span class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            `;
            chatMessages.appendChild(messageElement);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Confirm reservation button
    const confirmBtn = document.querySelector('.btn-confirm');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            // In a real app, this would process the payment and confirm the ride
            console.log('Reservation confirmed');
            alert('Reserva confirmada com sucesso! Você receberá os detalhes por email.');
        });
    }
});
const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

send.addEventListener("click", () => {

    const message = document.querySelector("#message");

    socket.emit("message", message.value);

    message.value = "";

});

socket.on("message", ({user, message}) => {

    const msg = document.createRange().createContextualFragment(`
    <div class="message">
                
        <div class="image-container">
            <img src="/images/perfil.jpg">
        </div>

        <div class="message-body">
            
            <div class="user-info">
                <span class="username">${user}</span>
                <span class="time">En linea</span>
            </div>

            <p>${message}</p>

        </div>
        
    </div>
    `);

    allMessages.append(msg);

});
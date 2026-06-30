const input = document.getElementById("mensaje");
const chatBox = document.getElementById("chatBox");

function enviarMensaje() {

    const texto = input.value.trim();

    if (texto === "") return;

    const mensaje = document.createElement("div");
    mensaje.className = "mensaje";
    mensaje.textContent = texto;

    chatBox.appendChild(mensaje);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        enviarMensaje();
    }
});
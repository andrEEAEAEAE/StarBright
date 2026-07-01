function enviarMensaje() {
    const input = document.getElementById("mensaje");
    const chatBox = document.getElementById("chatBox");

    if (input.value.trim() === "") return;

    const mensajeTexto = input.value;

    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje", "usuario");
    mensaje.textContent = mensajeTexto;

    chatBox.appendChild(mensaje);

    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    mensajes.push({
        texto: mensajeTexto,
        tipo: "usuario"
    });

    localStorage.setItem("mensajes", JSON.stringify(mensajes));

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

window.onload = function () {
    const chatBox = document.getElementById("chatBox");

    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    mensajes.forEach(m => {
        const mensaje = document.createElement("div");
        mensaje.classList.add("mensaje", m.tipo);
        mensaje.textContent = m.texto;

        chatBox.appendChild(mensaje);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
};

function borrarChat() {
    localStorage.removeItem("mensajes");
    document.getElementById("chatBox").innerHTML = "";
}

const input = document.getElementById("mensaje");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enviarMensaje();
    }
});

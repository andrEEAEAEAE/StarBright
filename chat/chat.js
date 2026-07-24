

const TUTORES = [
    {
        id: "t1",
        nombre: "Laura Méndez",
        materia: "Matemáticas",
        color: "#4FA8D8",
        estado: "online", // "online" | "ausente"
        respuestas: [
            "Hola! Dime qué necesitas reforzar.",
            "Claro, dime en qué tema quedaste.",
            "Perfecto, revisemos ese tema paso a paso.",
            "Dame un segundo y te explico.",
            "¿Podemos agendar una sesión esta semana?",
            "Sesión agendada!"
            
        ]
    },
    {
        id: "t2",
        nombre: "Carlos Vargas",
        materia: "Física",
        color: "#8E7CC3",
        estado: "ausente",
        respuestas: [
            "Estoy en otra tutoría, te respondo en un rato.",
            "Hola! Dime qué necesitas reforzar.",
            "Claro, dime en qué tema quedaste.",
            "Perfecto, revisemos ese tema paso a paso.",
            "Dame un segundo y te explico.",
            "¿Podemos agendar una sesión esta semana?",
            "Sesión agendada!"
        ]
    },
    {
        id: "t3",
        nombre: "Ana Torres",
        materia: "Inglés",
        color: "#4FBF8B",
        estado: "online",
        respuestas: [
            "Hi! How's your day?",
            "Nice! Tell me which topic you got stuck on",
            "Sure, Let's take a look at it.",
            "Can we schedule a session this week?",
            "Session scheduled!"
        ]
    }
];

const KEY = "tn_conversaciones";
let tutorActivo = null;

// --- Persistencia (localStorage) ---
function cargarConversaciones() {
    return JSON.parse(localStorage.getItem(KEY)) || {};
}

function guardarConversaciones(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
}

function obtenerMensajes(tutorId) {
    const data = cargarConversaciones();
    return data[tutorId] || [];
}

function agregarMensaje(tutorId, mensaje) {
    const data = cargarConversaciones();
    if (!data[tutorId]) data[tutorId] = [];
    data[tutorId].push(mensaje);
    guardarConversaciones(data);
}

// --- Utilidades de UI ---
function horaActual() {
    return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

function iniciales(nombre) {
    return nombre.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
}

function renderListaChats() {
    const lista = document.getElementById("tnConvList");
    lista.innerHTML = "";

    TUTORES.forEach(tutor => {
        const mensajes = obtenerMensajes(tutor.id);
        const ultimo = mensajes[mensajes.length - 1];

        const item = document.createElement("li");
        item.className = "tn-conv-item" + (tutor.id === tutorActivo ? " active" : "");
        item.tabIndex = 0;
        item.setAttribute("role", "button");
        item.onclick = () => abrirChat(tutor.id);

        item.innerHTML = `
            <div class="tn-avatar" style="background:${tutor.color}">
                ${iniciales(tutor.nombre)}
                <span class="tn-dot ${tutor.estado === "ausente" ? "tn-away" : ""}"></span>
            </div>
            <div class="tn-conv-info">
                <div class="tn-conv-top">
                    <span class="tn-conv-name">${tutor.nombre}</span>
                    <span class="tn-conv-time">${ultimo ? ultimo.hora : ""}</span>
                </div>
                <div class="tn-conv-preview">${ultimo ? escaparHtml(ultimo.texto) : "Aún no hay mensajes"}</div>
                <span class="tn-subject-chip" style="background:${tutor.color}">${tutor.materia}</span>
            </div>
        `;

        lista.appendChild(item);
    });
}

function escaparHtml(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}

function renderMensajes(tutorId) {
    const box = document.getElementById("tnMessages");
    box.innerHTML = "";

    const mensajes = obtenerMensajes(tutorId);

    if (mensajes.length === 0) {
        box.innerHTML = `<div class="tn-day-divider">Inicia la conversación</div>`;
        return;
    }

    mensajes.forEach(m => {
        const row = document.createElement("div");
        row.className = "tn-msg-row " + (m.tipo === "usuario" ? "mine" : "theirs");
        row.innerHTML = `
            <div class="tn-bubble">
                ${escaparHtml(m.texto)}
                <span class="tn-hora">${m.hora}</span>
            </div>
        `;
        box.appendChild(row);
    });

    box.scrollTop = box.scrollHeight;
}

function renderHeader(tutor) {
    document.getElementById("tnHeader").innerHTML = `
        <button class="tn-back-btn" onclick="volverALista()"><i class="bi bi-arrow-left"></i></button>
        <div class="tn-avatar" style="background:${tutor.color}">
            ${iniciales(tutor.nombre)}
            <span class="tn-dot ${tutor.estado === "ausente" ? "tn-away" : ""}"></span>
        </div>
        <div class="tn-header-info">
            <h3>${tutor.nombre}</h3>
            <span class="tn-header-status ${tutor.estado === "ausente" ? "tn-away" : ""}">
                ${tutor.estado === "ausente" ? "Ausente" : "En línea"} · ${tutor.materia}
            </span>
        </div>
        <div class="tn-header-actions">
            <button class="tn-icon-btn" onclick="borrarChat()" title="Borrar conversación">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `;
}

// --- Navegación entre chats ---
function abrirChat(tutorId) {
    tutorActivo = tutorId;
    const tutor = TUTORES.find(t => t.id === tutorId);

    document.getElementById("tnConversation").classList.add("tn-active");
    document.getElementById("tnSidebar").classList.add("tn-hide");

    renderHeader(tutor);
    renderMensajes(tutorId);
    renderListaChats();

    document.getElementById("mensaje").focus();
}

function volverALista() {
    document.getElementById("tnSidebar").classList.remove("tn-hide");
}

// --- Enviar mensaje + respuesta automática simulada ---
function enviarMensaje() {
    if (!tutorActivo) return;

    const input = document.getElementById("mensaje");
    const texto = input.value.trim();
    if (texto === "") return;

    const mensaje = { texto, tipo: "usuario", hora: horaActual() };
    agregarMensaje(tutorActivo, mensaje);
    renderMensajes(tutorActivo);
    renderListaChats();

    input.value = "";
    mostrarEscribiendo(tutorActivo);
}

function mostrarEscribiendo(tutorId) {
    const box = document.getElementById("tnMessages");
    const typing = document.createElement("div");
    typing.className = "tn-msg-row theirs";
    typing.id = "tnTypingRow";
    typing.innerHTML = `
        <div class="tn-typing"><span></span><span></span><span></span></div>
    `;
    box.appendChild(typing);
    box.scrollTop = box.scrollHeight;

    const demora = 900 + Math.random() * 1200;

    setTimeout(() => {
        const fila = document.getElementById("tnTypingRow");
        if (fila) fila.remove();

        // Si el usuario cambió de chat mientras "escribía", igual guardamos
        // la respuesta en la conversación correcta.
        const tutor = TUTORES.find(t => t.id === tutorId);
        const respuesta = tutor.respuestas[Math.floor(Math.random() * tutor.respuestas.length)];

        agregarMensaje(tutorId, { texto: respuesta, tipo: "tutor", hora: horaActual() });

        if (tutorId === tutorActivo) renderMensajes(tutorId);
        renderListaChats();
    }, demora);
}

function borrarChat() {
    if (!tutorActivo) return;
    const data = cargarConversaciones();
    delete data[tutorActivo];
    guardarConversaciones(data);
    renderMensajes(tutorActivo);
    renderListaChats();
}

// --- Inicialización ---
window.addEventListener("DOMContentLoaded", () => {
    renderListaChats();

    // En escritorio, abre el primer chat por defecto
    if (window.innerWidth > 760) {
        abrirChat(TUTORES[0].id);
    }

    document.getElementById("mensaje").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            enviarMensaje();
        }
    });
});

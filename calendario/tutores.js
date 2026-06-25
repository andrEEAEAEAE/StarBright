const lista = document.getElementById("listaTutorias");

function agregarTutoria() {
    const fecha = document.getElementById("fecha").value;
    const tutoria = document.getElementById("tutoria").value;

    if (fecha === "" || tutoria === "") {
        alert("Complete todos los campos");
        return;
    }

    const div = document.createElement("div");
    div.classList.add("tutoria");

    div.innerHTML = `
        <span><strong>${fecha}</strong> - ${tutoria}</span>
        <div class="botones">
            <button onclick="editarTutoria(this)">Editar</button>
            <button onclick="eliminarTutoria(this)">Eliminar</button>
        </div>
    `;

    lista.appendChild(div);

    document.getElementById("fecha").value = "";
    document.getElementById("tutoria").value = "";
}

function eliminarTutoria(boton) {
    boton.parentElement.parentElement.remove();
}

function editarTutoria(boton) {
    const nuevoTexto = prompt("Editar tutoría:");
    
    if (nuevoTexto) {
        const texto = boton.parentElement.parentElement.querySelector("span");
        const fecha = texto.innerHTML.split(" - ")[0];
        texto.innerHTML = `${fecha} - ${nuevoTexto}`;
    }
}
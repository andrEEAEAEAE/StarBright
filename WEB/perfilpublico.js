import { db } from "./firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Leer el UID del profesor desde la URL (ej: perfil-publico.html?uid=abc123)
const params = new URLSearchParams(window.location.search);
const uid = params.get("uid");

if (uid) {
  const docSnap = await getDoc(doc(db, "usuarios", uid));

  if (docSnap.exists()) {
    const datos = docSnap.data();

    // Nombre completo
    document.getElementById("nombreCompleto").textContent = datos.nombre + " " + datos.apellido;

    // Especialización y universidad
    document.getElementById("profesion").textContent = 
      (datos.especializacion || "Sin especialización") + " • " + (datos.universidad || "Sin institución");

    // Ubicación
    document.getElementById("ubicacionTexto").textContent = datos.distrito || "Panamá";

    // Cards
    document.getElementById("horarioCard").textContent = datos.horario || "No especificado";
    document.getElementById("experienciaCard").textContent = datos.laburo ? datos.laburo + " años" : "--";
  }
}
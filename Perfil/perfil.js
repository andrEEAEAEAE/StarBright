import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const docSnap = await getDoc(doc(db, "usuarios", uid));

    if (docSnap.exists()) {
      const datos = docSnap.data();

      // Datos compartidos
      document.getElementById("nombreCompleto").textContent = datos.nombre + " " + datos.apellido;
      document.getElementById("emailPerfil").textContent = datos.email;
      document.getElementById("telefonoPerfil").textContent = datos.telefono || "No especificado";

      // Badge de rol
      const badge = document.getElementById("rolBadge");
      badge.textContent = datos.rol === "profesor" ? "Profesor" : "Estudiante";

      // Mostrar sección según rol
      if (datos.rol === "profesor") {
        document.getElementById("seccionProfesor").style.display = "block";
        document.getElementById("especializacionPerfil").textContent = datos.especializacion || "--";
        document.getElementById("titulosPerfil").textContent = datos.titulos || "--";
        document.getElementById("laboroPerfil").textContent = datos.laburo || "--";
        document.getElementById("modalidadPerfil").textContent = datos.modalidad || "--";

      } else {
        document.getElementById("seccionEstudiante").style.display = "block";
        document.getElementById("gradoPerfil").textContent = datos.grado || "--";
        document.getElementById("institucionPerfil").textContent = datos.institucion || "--";
        document.getElementById("distritoPerfil").textContent = datos.distrito || "--";
      }

    }
  } else {
    // Si no hay sesión activa, manda al login
    window.location.href = "login.html"; // 👈 cambia por el nombre de tu login
  }
});

document.getElementById("btnEditar").addEventListener("click", () => {
  window.location.href = "editar-perfil.html"; // 👈 esto lo haremos después
});
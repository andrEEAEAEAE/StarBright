import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

document.getElementById("btnRegistro").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const distrito = document.getElementById("distrito").value;
  const grado = document.getElementById("grado").value;
  const institucion = document.getElementById("institucion").value;

  try {
    // 1. Crea la cuenta en Firebase Authentication
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;

    // 2. Guarda los datos del perfil en Firestore
    await setDoc(doc(db, "usuarios", uid), {
      rol: "estudiante",
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      distrito: distrito,
      grado: grado,
      institucion: institucion
    });

    alert("¡Registro exitoso! Bienvenido/a a TutorNow 🎉");
    window.location.href = "home.html"; 

  } catch (error) {
    alert("Error al registrarse: " + error.message);
  }
});
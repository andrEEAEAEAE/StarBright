import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

document.getElementById("btnLogin").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("¡Bienvenido/a de vuelta! 🎉");
    window.location.href = "home.html"; 

  } catch (error) {
    alert("Error al iniciar sesión: " + error.message);
  }
});
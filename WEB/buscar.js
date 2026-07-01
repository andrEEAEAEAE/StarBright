import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const contenedor = document.getElementById("contenedor-cards");

async function cargarProfesores() {
  const snapshot = await getDocs(collection(db, "usuarios"));

  snapshot.forEach((doc) => {
    const datos = doc.data();
    if (datos.rol !== "profesor") return;

    const card = `
      <div class="col">
        <a href="perfilpublico.html?uid=${doc.id}" class="text-decoration-none text-dark">
          <div class="card h-100 shadow-sm border-0 rounded-4 p-4">
            <img src="${datos.foto || 'img/LOGO_WEB-removebg-preview.png'}"
                 class="rounded-circle mx-auto d-block mb-3"
                 width="100" height="100"
                 style="object-fit: cover;">
            <h5 class="nombre-persona fw-bold text-center mb-1" style="color: rgba(95,95,95,0.911);">
              ${datos.nombre} ${datos.apellido}
            </h5>
            <p class="materia text-muted text-center small mb-2">
              ${datos.especializacion || "Sin especialización"}
            </p>
            <div class="text-center mb-3">
              <small class="precio text-success">${datos.tarifa || "Tarifa no especificada"}</small>
            </div>
            <p class="small text-muted text-center mb-0">
              ${datos.descripcion || "Sin descripción"}
            </p>
          </div>
        </a>
      </div>
    `;

    contenedor.innerHTML += card;
  });

  // ======= FILTROS (aquí dentro, después de cargar) =======

  const filtro = document.getElementById("filtroPrecio");
  filtro.addEventListener("change", () => {
    const cards = Array.from(contenedor.querySelectorAll(".col"));
    cards.sort((a, b) => {
      const precioA = Number(a.querySelector(".precio").textContent.replace(/[^\d.]/g, ""));
      const precioB = Number(b.querySelector(".precio").textContent.replace(/[^\d.]/g, ""));
      if (filtro.value === "barato") return precioA - precioB;
      if (filtro.value === "caro") return precioB - precioA;
      return 0;
    });
    cards.forEach(card => contenedor.appendChild(card));
  });

  const buscadorMateria = document.getElementById("buscadorMateria");
  buscadorMateria.addEventListener("input", function () {
    const texto = this.value.toLowerCase();
    contenedor.querySelectorAll(".col").forEach(card => {
      const materia = card.querySelector(".materia").textContent.toLowerCase();
      card.style.display = materia.includes(texto) ? "" : "none";
    });
  });

  const buscador = document.getElementById("buscador");
  buscador.addEventListener("input", function () {
    const texto = this.value.toLowerCase();
    contenedor.querySelectorAll(".col").forEach(card => {
      const nombre = card.querySelector(".nombre-persona").textContent.toLowerCase();
      card.style.display = nombre.includes(texto) ? "" : "none";
    });
  });
}

cargarProfesores();
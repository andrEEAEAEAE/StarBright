const buscador = document.getElementById("buscador");
const buscadorMateria = document.getElementById("buscadorMateria");
const filtroPrecio = document.getElementById("filtroPrecio");

const contenedor = document.getElementById("contenedor-cards");
const tarjetas = Array.from(contenedor.querySelectorAll(".tarjeta"));

function aplicarFiltros() {

    const textoNombre = buscador.value.toLowerCase().trim();
    const textoMateria = buscadorMateria.value.toLowerCase().trim();

    tarjetas.forEach(tarjeta => {

        const nombre = tarjeta.querySelector(".nombre-persona")
            .textContent.toLowerCase();

        const materia = tarjeta.querySelector(".materia")
            .textContent.toLowerCase();

        const coincideNombre = nombre.includes(textoNombre);
        const coincideMateria = materia.includes(textoMateria);

        tarjeta.style.display =
            coincideNombre && coincideMateria ? "" : "none";
    });

    ordenarTarjetas();
}

function ordenarTarjetas() {

    const opcion = filtroPrecio.value;

    if (opcion === "ninguno") return;

    const visibles = tarjetas.filter(t => t.style.display !== "none");

    visibles.sort((a, b) => {

        const precioA = parseFloat(
            a.querySelector(".precio")
             .textContent.replace("$", "")
             .replace("/hr", "")
        );

        const precioB = parseFloat(
            b.querySelector(".precio")
             .textContent.replace("$", "")
             .replace("/hr", "")
        );

        return opcion === "barato"
            ? precioA - precioB
            : precioB - precioA;
    });

    visibles.forEach(tarjeta => {
        contenedor.appendChild(tarjeta);
    });
}

buscador.addEventListener("input", aplicarFiltros);

buscadorMateria.addEventListener("input", aplicarFiltros);

filtroPrecio.addEventListener("change", aplicarFiltros);

// Un generador de ejercicios aleatorios creados usando lógica. Si se desea expandir los temarios, se deben hacer a mano y colocarse en el JS. 
// No tocar lo que ya está hecho a menos que se desee cambiar.

// ---------------------------------------------------------
// MATERIAL NUEVO
// ---------------------------------------------------------

const bancoGeografia = {
  facil: [
    { pais: "Francia", capital: "París" },
    { pais: "España", capital: "Madrid" },
    { pais: "Italia", capital: "Roma" },
    { pais: "México", capital: "Ciudad de México" },
    { pais: "Brasil", capital: "Brasilia" },
    { pais: "Japón", capital: "Tokio" },
    { pais: "Egipto", capital: "El Cairo" },
    { pais: "Canadá", capital: "Ottawa" },
    { pais: "Argentina", capital: "Buenos Aires" },
    { pais: "Alemania", capital: "Berlín" }
  ],
  media: [
    { pais: "Australia", capital: "Canberra" },
    { pais: "Turquía", capital: "Ankara" },
    { pais: "Sudáfrica", capital: "Pretoria" },
    { pais: "Kenia", capital: "Nairobi" },
    { pais: "Vietnam", capital: "Hanói" },
    { pais: "Perú", capital: "Lima" },
    { pais: "Marruecos", capital: "Rabat" },
    { pais: "Grecia", capital: "Atenas" },
    { pais: "Noruega", capital: "Oslo" },
    { pais: "Filipinas", capital: "Manila" }
  ],
  dificil: [
    { pais: "Kazajistán", capital: "Astaná" },
    { pais: "Bolivia", capital: "Sucre" },
    { pais: "Myanmar", capital: "Naipyidó" },
    { pais: "Esuatini", capital: "Mbabane" },
    { pais: "Surinam", capital: "Paramaribo" },
    { pais: "Bután", capital: "Timbu" },
    { pais: "Nauru", capital: "Yaren" },
    { pais: "Sri Lanka", capital: "Sri Jayawardenapura Kotte" },
    { pais: "Costa de Marfil", capital: "Yamusukro" },
    { pais: "Kirguistán", capital: "Biskek" }
  ]
};

const bancoQuimica = {
  facil: [
    { nombre: "Hidrógeno", simbolo: "H", numero: 1 },
    { nombre: "Oxígeno", simbolo: "O", numero: 8 },
    { nombre: "Carbono", simbolo: "C", numero: 6 },
    { nombre: "Nitrógeno", simbolo: "N", numero: 7 },
    { nombre: "Sodio", simbolo: "Na", numero: 11 },
    { nombre: "Hierro", simbolo: "Fe", numero: 26 },
    { nombre: "Oro", simbolo: "Au", numero: 79 },
    { nombre: "Plata", simbolo: "Ag", numero: 47 },
    { nombre: "Helio", simbolo: "He", numero: 2 },
    { nombre: "Calcio", simbolo: "Ca", numero: 20 }
  ],
  media: [
    { nombre: "Potasio", simbolo: "K", numero: 19 },
    { nombre: "Cloro", simbolo: "Cl", numero: 17 },
    { nombre: "Azufre", simbolo: "S", numero: 16 },
    { nombre: "Magnesio", simbolo: "Mg", numero: 12 },
    { nombre: "Zinc", simbolo: "Zn", numero: 30 },
    { nombre: "Cobre", simbolo: "Cu", numero: 29 },
    { nombre: "Aluminio", simbolo: "Al", numero: 13 },
    { nombre: "Fósforo", simbolo: "P", numero: 15 },
    { nombre: "Litio", simbolo: "Li", numero: 3 },
    { nombre: "Flúor", simbolo: "F", numero: 9 }
  ],
  dificil: [
    { nombre: "Tungsteno", simbolo: "W", numero: 74 },
    { nombre: "Manganeso", simbolo: "Mn", numero: 25 },
    { nombre: "Cobalto", simbolo: "Co", numero: 27 },
    { nombre: "Níquel", simbolo: "Ni", numero: 28 },
    { nombre: "Platino", simbolo: "Pt", numero: 78 },
    { nombre: "Mercurio", simbolo: "Hg", numero: 80 },
    { nombre: "Plomo", simbolo: "Pb", numero: 82 },
    { nombre: "Estaño", simbolo: "Sn", numero: 50 },
    { nombre: "Silicio", simbolo: "Si", numero: 14 },
    { nombre: "Bario", simbolo: "Ba", numero: 56 }
  ]
};

function generarGeografia(dificultad, cantidad) {
  const copia = [...bancoGeografia[dificultad]];
  copia.sort(() => Math.random() - 0.5);
  return copia.slice(0, cantidad).map(item => ({
    pregunta: `¿Cuál es la capital de ${item.pais}?`,
    respuesta: item.capital
  }));
}

function generarQuimica(dificultad, cantidad) {
  const copia = [...bancoQuimica[dificultad]];
  copia.sort(() => Math.random() - 0.5);
  const tiposDePregunta = ["simbolo", "nombre", "numero"];
  return copia.slice(0, cantidad).map(item => {
    const tipo = elegirAlAzar(tiposDePregunta);
    if (tipo === "simbolo") {
      return {
        pregunta: `¿Cuál es el símbolo químico del ${item.nombre.toLowerCase()}?`,
        respuesta: item.simbolo
      };
    }
    if (tipo === "nombre") {
      return {
        pregunta: `¿Qué elemento tiene el símbolo "${item.simbolo}"?`,
        respuesta: item.nombre
      };
    }
    return {
      pregunta: `¿Cuál es el número atómico del ${item.nombre.toLowerCase()}?`,
      respuesta: item.numero
    };
  });
}

const bancoVocabulario = {
  facil: [
    ["gato","perro","casa","sol","agua","libro","mesa","flor"],
  ],
  media: [
    ["efímero","perspicaz","meticuloso","resiliente","ambiguo","austero"],
  ],
  dificil: [
    ["idiosincrasia","parsimonioso","vicisitud","perentorio","dicotomía"],
  ]
};

const bancoVerdaderoFalso = [
  { texto: "El agua hierve a 100°C al nivel del mar.", valor: true },
  { texto: "La Tierra es el planeta más cercano al Sol.", valor: false },
  { texto: "Los mamíferos respiran mediante pulmones.", valor: true },
  { texto: "El español y el portugués son lenguas germánicas.", valor: false },
  { texto: "Un triángulo tiene tres lados.", valor: true },
  { texto: "El corazón humano tiene dos cámaras.", valor: false },
  { texto: "La fotosíntesis ocurre en las plantas.", valor: true },
  { texto: "El hielo es menos denso que el agua líquida.", valor: true },
  { texto: "Shakespeare escribió en español.", valor: false },
  { texto: "El sonido viaja más rápido en el aire que en el agua.", valor: false }
];

// LÓGICA DE GENERACIÓN

function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function elegirAlAzar(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function generarMatematicas(dificultad, cantidad) {
  const rangos = { facil: [1, 20], media: [10, 100], dificil: [50, 500] };
  const [min, max] = rangos[dificultad];
  const operaciones = dificultad === "facil" ? ["+", "-"] : ["+", "-", "×"];
  const ejercicios = [];
  for (let i = 0; i < cantidad; i++) {
    const a = aleatorioEntre(min, max);
    const b = aleatorioEntre(min, max);
    const op = elegirAlAzar(operaciones);
    let resultado;
    if (op === "+") resultado = a + b;
    else if (op === "-") resultado = a - b;
    else resultado = a * b;
    ejercicios.push({
      pregunta: `¿Cuánto es ${a} ${op} ${b}?`,
      respuesta: resultado
    });
  }
  return ejercicios;
}

function generarVocabulario(dificultad, cantidad) {
  const palabras = bancoVocabulario[dificultad][0];
  const ejercicios = [];
  const usadas = new Set();
  let intentos = 0;
  while (ejercicios.length < cantidad && intentos < cantidad * 10) {
    intentos++;
    const palabra = elegirAlAzar(palabras);
    if (usadas.has(palabra)) continue;
    usadas.add(palabra);
    ejercicios.push({
      pregunta: `Escribe una oración usando la palabra "${palabra}".`,
      respuesta: "Respuesta libre — revisa que la oración use la palabra correctamente."
    });
  }
  return ejercicios;
}

function generarVerdaderoFalso(dificultad, cantidad) {
  const copia = [...bancoVerdaderoFalso];
  copia.sort(() => Math.random() - 0.5);
  return copia.slice(0, cantidad).map(item => ({
    pregunta: `Verdadero o falso: ${item.texto}`,
    respuesta: item.valor ? "Verdadero" : "Falso"
  }));
}

const tiposDeTaller = [
  { id: "matematicas", nombre: "Matemáticas", generador: generarMatematicas },
  { id: "vocabulario", nombre: "Vocabulario", generador: generarVocabulario },
  { id: "verdaderofalso", nombre: "Verdadero o falso", generador: generarVerdaderoFalso },
  { id: "geografia", nombre: "Geografía", generador: generarGeografia },
  { id: "quimica", nombre: "Química", generador: generarQuimica }
];

let tallerActivo = "matematicas";

// INTERFAZ

function pintarTabs() {
  const contenedor = document.getElementById("tabs");
  contenedor.innerHTML = "";
  tiposDeTaller.forEach(t => {
    const boton = document.createElement("button");
    boton.className = "tab" + (t.id === tallerActivo ? " activa" : "");
    boton.textContent = t.nombre;
    boton.addEventListener("click", () => {
      tallerActivo = t.id;
      pintarTabs();
      generar();
    });
    contenedor.appendChild(boton);
  });
}

function generar() {
  const dificultad = document.getElementById("dificultad").value;
  const cantidad = parseInt(document.getElementById("cantidad").value, 10);
  const tipo = tiposDeTaller.find(t => t.id === tallerActivo);
  const ejercicios = tipo.generador(dificultad, cantidad);

  const contenedor = document.getElementById("taller");
  contenedor.innerHTML = `<h2>${tipo.nombre} — nivel ${dificultad}</h2>`;
  const lista = document.createElement("ol");

  ejercicios.forEach((ej, i) => {
    const li = document.createElement("li");
    const idResp = `resp-${i}`;
    li.innerHTML = `
      ${ej.pregunta}<br>
      <button class="ver-respuesta" data-target="${idResp}">Ver respuesta</button>
      <div class="respuesta" id="${idResp}">${ej.respuesta}</div>
    `;
    lista.appendChild(li);
  });

  contenedor.appendChild(lista);

  document.querySelectorAll(".ver-respuesta").forEach(boton => {
    boton.addEventListener("click", () => {
      const destino = document.getElementById(boton.dataset.target);
      destino.classList.toggle("visible");
      boton.textContent = destino.classList.contains("visible") ? "Ocultar respuesta" : "Ver respuesta";
    });
  });
}

document.getElementById("btnGenerar").addEventListener("click", generar);
document.getElementById("btnImprimir").addEventListener("click", () => window.print());

pintarTabs();
generar();
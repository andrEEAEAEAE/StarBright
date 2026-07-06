const profesores = {
    1: {
        nombre: "Erina Marín",
        profesion: "Tutor de Física",
        experiencia: "4 años",
        tarifa: "$25/hr",
        foto: "img/perfil.jpg",
        acerca: "¡Ganas de enseñar nunca faltan!"
    },
    2: {
        nombre: "Juan Pérez",
        profesion: "Tutor de Matemáticas",
        experiencia: "4 años",
        tarifa: "$10/hr",
        foto: "img/perfil.jpg",
        acerca: "Estudiante de Ingeniería en Sistemas ayudando a estudiantes en Matemáticas y Física."
    },
    3: {
        nombre: "María López",
        profesion: "Tutor de Química",
        experiencia: "3 años",
        tarifa: "$15/hr",
        foto: "img/perfil.jpg",
        acerca: "Licenciada en Química con pasión por enseñar de forma práctica y visual."
    },
    4: {
        nombre: "Carlos Gómez",
        profesion: "Tutor de Programación",
        experiencia: "5 años",
        tarifa: "$20/hr",
        foto: "img/perfil.jpg",
        acerca: "Desarrollador full-stack, enseño desde lo básico hasta proyectos reales."
    },
    5: {
        nombre: "Ana Martínez",
        profesion: "Tutor de Inglés",
        experiencia: "6 años",
        tarifa: "$18/hr",
        foto: "img/perfil.jpg",
        acerca: "Profesora certificada en enseñanza de inglés como segunda lengua."
    },
    6: {
        nombre: "Luis Rodríguez",
        profesion: "Tutor de Biología",
        experiencia: "4 años",
        tarifa: "$25/hr",
        foto: "img/perfil.jpg",
        acerca: "Biólogo apasionado por explicar procesos complejos de forma sencilla."
    },
    7: {
        nombre: "Sofía Herrera",
        profesion: "Tutor de Historia",
        experiencia: "3 años",
        tarifa: "$12/hr",
        foto: "img/perfil.jpg",
        acerca: "Historiadora enfocada en hacer la historia interesante y memorable."
    },
    8: {
        nombre: "Diego Fernández",
        profesion: "Tutor de Cálculo",
        experiencia: "7 años",
        tarifa: "$30/hr",
        foto: "img/perfil.jpg",
        acerca: "Ingeniero con amplia experiencia preparando estudiantes para exámenes universitarios."
    },
    9: {
        nombre: "Valentina Castro",
        profesion: "Tutor de Estadística",
        experiencia: "4 años",
        tarifa: "$17/hr",
        foto: "img/perfil.jpg",
        acerca: "Especialista en hacer que los números tengan sentido para cualquier estudiante."
    },
    10: {
        nombre: "Andrés Morales",
        profesion: "Tutor de Física Cuántica",
        experiencia: "5 años",
        tarifa: "$22/hr",
        foto: "img/perfil.jpg",
        acerca: "Físico apasionado por acercar la ciencia compleja a todos los niveles."
    },
    11: {
        nombre: "Camila Rivera",
        profesion: "Tutor de Literatura",
        experiencia: "3 años",
        tarifa: "$12/hr",
        foto: "img/perfil.jpg",
        acerca: "Amante de las letras, ayudo a mejorar la escritura y comprensión lectora."
    },
    12: {
        nombre: "Roberto Jiménez",
        profesion: "Tutor de Contabilidad",
        experiencia: "6 años",
        tarifa: "$20/hr",
        foto: "img/perfil.jpg",
        acerca: "Contador público con experiencia enseñando finanzas de forma práctica."
    },
    13: {
        nombre: "Isabella Vargas",
        profesion: "Tutor de Francés",
        experiencia: "4 años",
        tarifa: "$35/hr",
        foto: "img/perfil.jpg",
        acerca: "Bilingüe en francés, enfocada en enseñanza conversacional dinámica."
    },
    14: {
        nombre: "Fernando Ortiz",
        profesion: "Tutor de Matemáticas",
        experiencia: "5 años",
        tarifa: "$15/hr",
        foto: "img/perfil.jpg",
        acerca: "Profesor de matemáticas con enfoque en resolución de problemas paso a paso."
    },
    15: {
        nombre: "Gabriela Sánchez",
        profesion: "Tutor de Psicología",
        experiencia: "3 años",
        tarifa: "$14/hr",
        foto: "img/perfil.jpg",
        acerca: "Psicóloga interesada en apoyar el aprendizaje desde una mirada humana."
    },
    16: {
        nombre: "Miguel Torres",
        profesion: "Tutor de Robótica",
        experiencia: "4 años",
        tarifa: "$20/hr",
        foto: "img/perfil.jpg",
        acerca: "Ingeniero en electrónica, enseño robótica de forma práctica con proyectos."
    },
    17: {
        nombre: "Daniela Cruz",
        profesion: "Tutor de Marketing",
        experiencia: "5 años",
        tarifa: "$17/hr",
        foto: "img/perfil.jpg",
        acerca: "Especialista en marketing digital con experiencia en proyectos reales."
    },
    18: {
        nombre: "Javier Aguilar",
        profesion: "Tutor de Química",
        experiencia: "11 años",
        tarifa: "$10/hr",
        foto: "img/perfil.jpg",
        acerca: "Graduado en Lic. de Ciencias Médicas, con más de 10 años de experiencia como tutor, con resultados comprobados."
    },
    19: {
        nombre: "Lucía Mendoza",
        profesion: "Tutor de Diseño Gráfico",
        experiencia: "4 años",
        tarifa: "$8/hr",
        foto: "img/perfil.jpg",
        acerca: "Diseñadora gráfica que ayuda a desarrollar creatividad y técnica."
    },
    20: {
        nombre: "Pablo Guerrero",
        profesion: "Tutor de Física",
        experiencia: "5 años",
        tarifa: "$9/hr",
        foto: "img/perfil.jpg",
        acerca: "¡Enseño física de manera sencilla para la comprensión de todos!"
    },
    21: {
        nombre: "Didier Martínez",
        profesion: "Tutor de Programación",
        experiencia: "2 años",
        tarifa: "$8/hr",
        foto: "img/perfil.jpg",
        acerca: "Graduado de honores en la UTP. Aprenderás de manera eficaz y económica."
    },
    22: {
        nombre: "Daniela de Fernández",
        profesion: "Tutor de Biología",
        experiencia: "1 año",
        tarifa: "$10/hr",
        foto: "img/perfil.jpg",
        acerca: "Recién graduada de Lic. Biología. Poseo amplios conocimientos y me adapto a la manera de aprender del estudiante."
    }
};

function cargarPerfil(id) {
    const p = profesores[id];
    if (!p) return;

    document.getElementById('perfilNombre').textContent = p.nombre;
    document.getElementById('perfilProfesion').textContent = p.profesion;
    document.getElementById('perfilExperiencia').textContent = p.experiencia;
    document.getElementById('perfilTarifa').textContent = p.tarifa;
    document.getElementById('perfilFoto').src = p.foto;
    document.getElementById('perfilAcerca').textContent = p.acerca;
}

const modalDenuncia = document.getElementById("modalDenuncia");
document.getElementById("abrirModalDenuncia").addEventListener("click", () => {
    modalDenuncia.style.display = "flex";
});
document.getElementById("cerrarModalDenuncia").addEventListener("click", () => {
    modalDenuncia.style.display = "none";
});
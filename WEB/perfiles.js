const profesores = {
    1: {
        nombre: "Erina Marín",
        profesion: "Tutor de Física",
        experiencia: "4 años",
        tarifa: "$25/hr",
        foto: "fotos/1.jpeg",
        acerca: "¡Ganas de enseñar nunca faltan!"
    },
    2: {
        nombre: "Juan Pérez",
        profesion: "Tutor de Matemáticas",
        experiencia: "4 años",
        tarifa: "$10/hr",
        foto: "fotos/2.jpeg",
        acerca: "Estudiante de Ingeniería en Sistemas ayudando a estudiantes en Matemáticas y Física."
    },
    3: {
        nombre: "María López",
        profesion: "Tutor de Química",
        experiencia: "3 años",
        tarifa: "$15/hr",
        foto: "fotos/3.jpeg",
        acerca: "Licenciada en Química con pasión por enseñar de forma práctica y visual."
    },
    4: {
        nombre: "Carlos Gómez",
        profesion: "Tutor de Programación",
        experiencia: "5 años",
        tarifa: "$20/hr",
        foto: "fotos/4.jpeg",
        acerca: "Desarrollador full-stack, enseño desde lo básico hasta proyectos reales."
    },
    5: {
        nombre: "Ana Martínez",
        profesion: "Tutor de Inglés",
        experiencia: "6 años",
        tarifa: "$18/hr",
        foto: "fotos/5.jpeg",
        acerca: "Profesora certificada en enseñanza de inglés como segunda lengua."
    },
    6: {
        nombre: "Luis Rodríguez",
        profesion: "Tutor de Biología",
        experiencia: "4 años",
        tarifa: "$25/hr",
        foto: "fotos/6.jpeg",
        acerca: "Biólogo apasionado por explicar procesos complejos de forma sencilla."
    },
    7: {
        nombre: "Sofía Herrera",
        profesion: "Tutor de Historia",
        experiencia: "3 años",
        tarifa: "$12/hr",
        foto: "fotos/7.jpeg",
        acerca: "Historiadora enfocada en hacer la historia interesante y memorable."
    },
    8: {
        nombre: "Diego Fernández",
        profesion: "Tutor de Cálculo",
        experiencia: "7 años",
        tarifa: "$30/hr",
        foto: "fotos/8.jpeg",
        acerca: "Ingeniero con amplia experiencia preparando estudiantes para exámenes universitarios."
    },
    9: {
        nombre: "Valentina Castro",
        profesion: "Tutor de Estadística",
        experiencia: "4 años",
        tarifa: "$17/hr",
        foto: "fotos/9.jpeg",
        acerca: "Especialista en hacer que los números tengan sentido para cualquier estudiante."
    },
    10: {
        nombre: "Andrés Morales",
        profesion: "Tutor de Física Cuántica",
        experiencia: "5 años",
        tarifa: "$22/hr",
        foto: "fotos/10.jpeg",
        acerca: "Físico apasionado por acercar la ciencia compleja a todos los niveles."
    },
    11: {
        nombre: "Camila Rivera",
        profesion: "Tutor de Literatura",
        experiencia: "3 años",
        tarifa: "$12/hr",
        foto: "fotos/11.jpeg",
        acerca: "Amante de las letras, ayudo a mejorar la escritura y comprensión lectora."
    },
    12: {
        nombre: "Roberto Jiménez",
        profesion: "Tutor de Contabilidad",
        experiencia: "6 años",
        tarifa: "$20/hr",
        foto: "fotos/12.jpeg",
        acerca: "Contador público con experiencia enseñando finanzas de forma práctica."
    },
    13: {
        nombre: "Isabella Vargas",
        profesion: "Tutor de Francés",
        experiencia: "4 años",
        tarifa: "$35/hr",
        foto: "fotos/13.jpg",
        acerca: "Bilingüe en francés, enfocada en enseñanza conversacional dinámica."
    },
    14: {
        nombre: "Fernando Ortiz",
        profesion: "Tutor de Matemáticas",
        experiencia: "5 años",
        tarifa: "$15/hr",
        foto: "fotos/14.jpeg",
        acerca: "Profesor de matemáticas con enfoque en resolución de problemas paso a paso."
    },
    15: {
        nombre: "Gabriela Sánchez",
        profesion: "Tutor de Psicología",
        experiencia: "3 años",
        tarifa: "$14/hr",
        foto: "fotos/15.webp",
        acerca: "Psicóloga interesada en apoyar el aprendizaje desde una mirada humana."
    },
    16: {
        nombre: "Miguel Torres",
        profesion: "Tutor de Robótica",
        experiencia: "4 años",
        tarifa: "$20/hr",
        foto: "fotos/16.jpeg",
        acerca: "Ingeniero en electrónica, enseño robótica de forma práctica con proyectos."
    },
    17: {
        nombre: "Daniela Cruz",
        profesion: "Tutor de Marketing",
        experiencia: "5 años",
        tarifa: "$17/hr",
        foto: "fotos/17.jpg",
        acerca: "Especialista en marketing digital con experiencia en proyectos reales."
    },
    18: {
        nombre: "Javier Aguilar",
        profesion: "Tutor de Química",
        experiencia: "11 años",
        tarifa: "$10/hr",
        foto: "fotos/18.jpeg",
        acerca: "Graduado en Lic. de Ciencias Médicas, con más de 10 años de experiencia como tutor, con resultados comprobados."
    },
    19: {
        nombre: "Lucía Mendoza",
        profesion: "Tutor de Diseño Gráfico",
        experiencia: "4 años",
        tarifa: "$8/hr",
        foto: "fotos/19.jpg",
        acerca: "Diseñadora gráfica que ayuda a desarrollar creatividad y técnica."
    },
    20: {
        nombre: "Pablo Guerrero",
        profesion: "Tutor de Física",
        experiencia: "5 años",
        tarifa: "$9/hr",
        foto: "fotos/20.jpeg",
        acerca: "¡Enseño física de manera sencilla para la comprensión de todos!"
    },
    21: {
        nombre: "Didier Martínez",
        profesion: "Tutor de Programación",
        experiencia: "2 años",
        tarifa: "$8/hr",
        foto: "fotos/21.jpeg",
        acerca: "Graduado de honores en la UTP. Aprenderás de manera eficaz y económica."
    },
    22: {
        nombre: "Daniela de Fernández",
        profesion: "Tutor de Biología",
        experiencia: "1 año",
        tarifa: "$10/hr",
        foto: "fotos/22.jpg",
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

    // NUEVO: actualizar el corazón según el profesor actual
    const boton = document.getElementById('btnFavorito');
    const icono = document.getElementById('iconoFavorito');
    boton.dataset.profesorId = id; // guardamos qué profesor está abierto ahora

    if (favoritos.has(String(id))) {
        boton.classList.add('activo');
        icono.classList.remove('fa-regular');
        icono.classList.add('fa-solid');
    } else {
        boton.classList.remove('activo');
        icono.classList.remove('fa-solid');
        icono.classList.add('fa-regular');
    }
}

const modalDenuncia = document.getElementById("modalDenuncia");
document.getElementById("abrirModalDenuncia").addEventListener("click", () => {
    modalDenuncia.style.display = "flex";
});
document.getElementById("cerrarModalDenuncia").addEventListener("click", () => {
    modalDenuncia.style.display = "none";
});
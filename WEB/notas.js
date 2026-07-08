document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.notas-form');
    const titleInput = document.querySelector('.notas-form-input');
    const contentInput = document.querySelector('.notas-form-textarea');
    const notesList = document.querySelector('.notas-notes-list');
    const emptyState = document.querySelector('.notas-empty-state');

    // Colores alternados para el borde de cada nota nueva
    const borderClasses = ['notas-border-primary', 'notas-border-secondary'];
    let borderIndex = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (!title || !content) {
            alert('Por favor completa el título y el contenido de la nota.');
            return;
        }

        // Ocultar el mensaje de "no hay notas" si existe
        if (emptyState) {
            emptyState.style.display = 'none';
        }

        // Crear el elemento de la nueva nota
        const note = document.createElement('div');
        note.className = `notas-note-item notas-shadow-faq ${borderClasses[borderIndex % borderClasses.length]}`;
        borderIndex++;

        // Convertir saltos de línea en <br> para que se vea igual que las notas de ejemplo
        const formattedContent = content.replace(/\n/g, '<br>');

        note.innerHTML = `
            <div class="notas-note-header">
                <h4 class="notas-note-title"></h4>
                <div class="notas-note-actions">
                    <button class="notas-btn-icon"><i class="fa fa-pencil"></i></button>
                    <button class="notas-btn-icon notas-delete"><i class="fa fa-trash"></i></button>
                </div>
            </div>
            <p class="notas-note-content"></p>
        `;

        // Usar textContent para el título (evita inyección de HTML) y luego setear el contenido formateado
        note.querySelector('.notas-note-title').textContent = title;
        note.querySelector('.notas-note-content').innerHTML = formattedContent;

        // Botón de eliminar
        note.querySelector('.notas-btn-icon.notas-delete').addEventListener('click', () => {
            note.remove();
            // Si ya no quedan notas, volver a mostrar el mensaje de vacío
            if (notesList.querySelectorAll('.notas-note-item').length === 0 && emptyState) {
                emptyState.style.display = '';
            }
        });

        // Insertar la nota al inicio de la lista (arriba de las demás)
        notesList.insertBefore(note, notesList.firstChild);

        // Limpiar el formulario
        form.reset();
    });

    // Hacer que los botones de eliminar de las notas de ejemplo también funcionen
    document.querySelectorAll('.notas-note-item .notas-btn-icon.notas-delete').forEach((btn) => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.notas-note-item');
            item.remove();
            if (notesList.querySelectorAll('.notas-note-item').length === 0 && emptyState) {
                emptyState.style.display = '';
            }
        });
    });
});
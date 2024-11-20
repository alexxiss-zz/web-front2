document.querySelectorAll('.course-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Has seleccionado el curso!');
    });
});

// Función de búsqueda de cursos
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario recargue la página

    const query = document.getElementById('search-bar').value.toLowerCase();
    const courses = document.querySelectorAll('.course-card');
    let found = false;

    courses.forEach(course => {
        const courseName = course.querySelector('h3').textContent.toLowerCase();
        if (courseName.includes(query)) {
            course.scrollIntoView({ behavior: 'smooth' }); // Llevar al curso
            course.style.border = '2px solid #00ff00'; // Resaltar el curso
            found = true;
        } else {
            course.style.border = ''; // Restablecer el borde si no coincide
        }
    });

    if (!found) {
        alert('No se encontró ningún curso con ese nombre');
    }
});

//Planes 
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Plan adquirido con éxito!");
        });
    });
});

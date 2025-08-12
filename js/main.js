// Manejo del formulario de reseñas
document.getElementById('form-reseña').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = this.elements['nombre'].value;
    const reseña = this.elements['reseña'].value;
    
    if(nombre && reseña) {
        agregarReseña(nombre, reseña);
        this.reset();
    }
});

function agregarReseña(nombre, texto) {
    const contenedor = document.getElementById('reseñas-container');
    const reseñaDiv = document.createElement('div');
    reseñaDiv.className = 'reseña-item';
    reseñaDiv.innerHTML = `
        <h4>${nombre}</h4>
        <p>${texto}</p>
        <small>${new Date().toLocaleDateString()}</small>
    `;
    
    contenedor.prepend(reseñaDiv);
}

// Smooth scrolling para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
export async function loadProyects() {
    try {
        const response = await fetch('./json/proyectos.json');
        const proyectos = await response.json();

        const contenedor = document.querySelector('.galeria_proyects');

        proyectos.forEach(proyecto => {
            const card = document.createElement('div');
            card.classList.add('card_proyect');

            // Generar las burbujas de habilidades como HTML
            const skillsHTML = proyecto.skills_proyect
                .map(skill => `<div class="skill_bubble">${skill}</div>`)
                .join('');

            card.innerHTML = `
                <div class="imagen_proyect">
                    <img src="${proyecto.img_proyect}" alt="">
                </div>
                <div class="info_proyect">
                    <h4>${proyecto.titulo_proyect}</h4>
                    <p>${proyecto.desc_proyect}</p>
                    <div class="skills_proyect">
                        ${skillsHTML}
                    </div>
                </div>
            `;

            contenedor.appendChild(card);
        });

    } catch (error) {
        console.log('Error cargando los proyectos', error);
    }
}

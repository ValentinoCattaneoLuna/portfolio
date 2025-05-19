export async function loadSkills() {
    try {
        const response = await fetch('./json/skills.json')
        const skills = await response.json();

        const contenedor = document.querySelector('.galeria_skills')

        skills.forEach(skill => {
            const card = document.createElement('div');
            card.classList.add('card_skill');

            card.innerHTML = `
            <img src="${skill.imagen_skill}" alt="${skill.alt_skill}">
            <h5>${skill.nombre_skill}</h5>   
        `
            contenedor.appendChild(card)
        });

    } catch (error) {
        console.log('Error cargando las skills', error);

    }




}
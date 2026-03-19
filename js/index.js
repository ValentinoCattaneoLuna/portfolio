import {toggleMenu} from './components/toggleMenu.js'
import { loadSkills } from './components/loadSkills.js';
import {loadProyectos} from './components/loadProyectos.js';
import { toggleLang } from './components/toggleLang.js';

const currentYear = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", async() => {
    document.getElementById("copy-year").textContent = currentYear;
    toggleMenu();
    loadSkills();
    const idioma = document.getElementById("btn_idioma").dataset.lang
    loadProyectos(idioma);
    toggleLang()
  });
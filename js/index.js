import {toggleMenu} from './components/toggleMenu.js'
import { loadSkills } from './components/loadSkills.js';
import {loadProyects} from './components/loadProyects.js';
document.addEventListener("DOMContentLoaded", async() => {
    toggleMenu();
    loadSkills();
    loadProyects();
  });
import { loadProyectos } from "./loadProyectos.js";
export async function toggleLang() {


    const btn_idioma = document.getElementById("btn_idioma")
    const text_btn_idioma = document.querySelector("#btn_idioma span")
    const textToChange = document.querySelectorAll("[data-section]")
    const btn_cv_desktop = document.querySelector(".btn_cv_desktop")
    const btn_cv_mobile = document.querySelector(".btn_cv_mobile")




    

    btn_idioma.addEventListener("click", async () => {
        
        if (btn_idioma.dataset.lang === "es") {
            text_btn_idioma.textContent = "EN"
            btn_idioma.dataset.lang = "en"
            
            btn_cv_desktop.href="./assets/docs/CV_EN_ValentinoCattaneoLuna.pdf"
            btn_cv_mobile.href="./assets/docs/CV_EN_ValentinoCattaneoLuna.pdf"
            btn_cv_desktop.download="CV_EN_ValentinoCattaneoLuna.pdf"
            btn_cv_mobile.download="CV_EN_ValentinoCattaneoLuna.pdf"
            
        }
        else {
            text_btn_idioma.textContent = "ES"
            btn_idioma.dataset.lang = "es"
            
            btn_cv_desktop.href="./assets/docs/CV_ES_ValentinoCattaneoLuna.pdf"
            btn_cv_mobile.href="./assets/docs/CV_ES_ValentinoCattaneoLuna.pdf"
            btn_cv_desktop.download="CV_ES_ValentinoCattaneoLuna.pdf"
            btn_cv_mobile.download="CV_ES_ValentinoCattaneoLuna.pdf"

        }

        const response = await fetch(`json/${btn_idioma.dataset.lang}.json`)

        const textos = await response.json()

        textToChange.forEach((element) => {
            const section = element.dataset.section;
            const value = element.dataset.value;
            element.innerHTML = textos[section][value]
        });
        await loadProyectos(btn_idioma.dataset.lang);

    });
}
// Este é o ponto de entrada de sua aplicação
import { login } from './pages/login/main.js';
import { home } from './pages/home/main.js';
import { record } from './pages/register/main.js';

const main = document.querySelector("#root");

window.addEventListener("load", () => {
    main.appendChild(login());
})
const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case " ":
                main.appendChild(login());
                break;
            case "#register":
                main.appendChild(record());
                break;
            default:
                main.appendChild(login());
        }
    });
}

init();
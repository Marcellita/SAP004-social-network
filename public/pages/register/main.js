// Aqui serão criados os eventos de Manipulação de DOM e templates


export const record = () => {
    const container = document.createElement("div");

    container.innerHTML = `
    <form id="contactForm">
    <p class="registro"><h2>Registro</h2>
    <label for="name">
    <input type="name" id="name" class="user-name" placeholder="Nome">
    <label for="surname">
    <input type="surname" id="surname" class="surname" placeholder="Sobrenome"><br>
    <label for="date">
    <input type="date" id="date" class="date" placeholder="Data de Nascimento">
    <p><input type="text" id="email" class="email" placeholder="Digite o email"></p>
    <input type="password" id="pass" class="pass" placeholder= "Digite a senha">
    <input type="password" id="password" class="password" placeholder= "Confirme a senha">
    <p><button id="record" class="btn-record">Criar conta</button></p> 
    </form>
    `
    return container;
}
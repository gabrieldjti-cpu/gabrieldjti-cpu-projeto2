function loginAdmin() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "123") {
        localStorage.setItem("adminLogado", "true");
        alert("Login realizado!");
        window.location.href = "index.html";
    } else {
        alert("Login inválido");
    }
}

function verificarAdmin() {
    const admin = localStorage.getItem("adminLogado");

    if (admin === "true") {
        mostrarBotoesAdmin();
    }
}

function mostrarBotoesAdmin() {
    const cards = document.querySelectorAll(".card-resultado");

    cards.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("admin-acoes");

        div.innerHTML = `
            <button onclick="editarCard(this)">Editar</button>
            <button onclick="excluirCard(this)">Excluir</button>
        `;

        card.appendChild(div);
    });
}

function excluirCard(btn) {
    const confirmar = confirm("Tem certeza que deseja excluir?");

    if (confirmar) {
        btn.closest(".card-resultado").remove();
    }
}

function editarCard(btn) {
    const card = btn.closest(".card-resultado");

    const nome = card.querySelector("h3");
    const especialidade = card.querySelector(".especialidade");
    const descricao = card.querySelector(".descricao");

    const novoNome = prompt("Editar nome:", nome.innerText);
    const novaEspecialidade = prompt("Editar especialidade:", especialidade.innerText);
    const novaDescricao = prompt("Editar descrição:", descricao.innerText);

    if (novoNome) nome.innerText = novoNome;
    if (novaEspecialidade) especialidade.innerText = novaEspecialidade;
    if (novaDescricao) descricao.innerText = novaDescricao;
}
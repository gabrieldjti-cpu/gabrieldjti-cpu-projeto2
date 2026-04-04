// Quando a página carregar
window.onload = function() {
  const container = document.getElementById("listaProfissionais");

  // Pegando dados
  const lista = JSON.parse(localStorage.getItem("profissionais")) || [];

  // Se não tiver ninguém cadastrado
  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum profissional cadastrado.</p>";
    return;
  }

  // Criando os cards
  lista.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("perfil");

    card.innerHTML = `
      <h2>${p.nome}</h2>
      <p><strong>Profissão:</strong> ${p.profissao}</p>
      <p>${p.descricao}</p>
      <button>Entrar em contato</button>
    `;

    container.appendChild(card);
  });
};

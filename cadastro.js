// Quando o formulário for enviado
document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault(); // impede recarregar a página

  // Pegando os valores
  const nome = document.getElementById("nome").value;
  const profissao = document.getElementById("profissao").value;
  const descricao = document.getElementById("descricao").value;

  // Criando objeto
  const profissional = {
    nome: nome,
    profissao: profissao,
    descricao: descricao
  };

  // Pegando lista existente ou criando nova
  let lista = JSON.parse(localStorage.getItem("profissionais")) || [];

  // Adicionando novo profissional
  lista.push(profissional);

  // Salvando no navegador
  localStorage.setItem("profissionais", JSON.stringify(lista));

  // Feedback
  alert("Cadastro realizado com sucesso!");

  // Limpa formulário
  document.getElementById("formCadastro").reset();
});

// Quando o formulário for enviado
document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault(); // impede recarregar a página
 console.log("Formulário enviado!"); // para debug
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
  console.log("Profissional adicionado:", profissional); // para debug
  // Salvando no navegador
  localStorage.setItem("profissionais", JSON.stringify(lista));

  console.log("Lista de profissionais:", JSON.parse(localStorage.getItem("profissionais")) || []);

  // Feedback
  alert("Cadastro realizado com sucesso!");

  // Limpa formulário
  document.getElementById("formCadastro").reset();
});

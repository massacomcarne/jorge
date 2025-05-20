// script.js

class Contato {
  constructor(nome, email, assunto, mensagem) {
    this.nome = nome;
    this.email = email;
    this.assunto = assunto;
    this.mensagem = mensagem;
  }
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  const contato = new Contato(nome, email, assunto, mensagem);

  alert(`Mensagem enviada por ${contato.nome} sobre ${contato.assunto}:\n${contato.mensagem}`);
  this.reset();
});

// Adicionar produto com imagem e link
const lista = document.getElementById("lista-produtos");
document.getElementById("add-produto").addEventListener("click", () => {
  const nome = prompt("Nome do animal?");
  const preco = prompt("Preço?");
  const imagem = prompt("URL da imagem?");
  const link = prompt("Link externo para mais informações?");

  if (nome && preco && imagem && link) {
    const card = document.createElement("div");
    card.className = "produto-card";
    card.innerHTML = `
      <img src="${imagem}" alt="${nome}" />
      <h3>${nome}</h3>
      <p>Preço: ${preco}</p>
      <a href="${link}" target="_blank">Saiba mais</a>
    `;
    lista.appendChild(card);
    card.scrollIntoView({ behavior: "smooth", block: "end" });
  }
});

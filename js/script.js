// Ativando link

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  // verificando se o href está incluido na url
  if (url.includes(href)) {
    // adicionando classe ativo ao link alvo
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  // pegando atributo aria-controls
  const controls = pergunta.getAttribute("aria-controls");
  // pegando elemento que contem atributo aria-controls
  const resposta = document.getElementById(controls);

  // adicionando classe ativa ao elemento alvo
  resposta.classList.toggle("ativa");
  // selecionando elemento que contem classe ativa
  const ativa = resposta.classList.contains("ativa");
  // definindo atributo aria-expanded como ativo
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  // verificando tamanho da tela
  const media = matchMedia("(min-width: 1000px)").matches;
  // definindo imagem alvo em destaque
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function galeriaEventos(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(galeriaEventos);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}

/**
 * LET'S CODE
 * 
 * 1. Criando o elemento
 * A primeira função que iremos criar será responsável pela criação de um elemento
 * do nosso react similar ao que fizemos manualmente com o JSX.
 * 
 * Para isso, primeiro crie um elemento do DOM através da API de document e salve em uma variável.
 * Depois, adicione o texto que faz parte de children como innerHTML do elemento salvo anteriormente.
 * 
 * Retorne a variável com o elemento do DOM.
 * 
 */
 function element(children) {
  const dom = document.createElement("div");

  dom.innerHTML = children.join(" ");

  return dom;
}
// Observação: Sim, por enquanto vamos ignorar os dois primeiros argumentos
function createElement(el, props, ...children) {
  return element(children);
}

/**
 * LET'S CODE
 * 
 * 2. Adicionando o elemento ao DOM
 * 
 * A segunda função que vamos criar será responsável adicionar o elemento criado por createElement()
 * ao DOM.
 * 
 * Para isso, é preciso usar a função "appendChild" do container passando como argumento o elemento. 
 * 
 * Bora lá? 
 */
function render(element, container) {
  container.appendChild(element)
}

export { createElement, render };

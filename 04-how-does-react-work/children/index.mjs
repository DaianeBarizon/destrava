/**
 * LET'S CODE
 * 
 * 1. Desenhando os filhos
 * 
 * A função createDOM é responsável por criar os elementos do DOM que 
 * serão injetados no nosso container.
 * 
 * Além de criar um elemento de acordo com o tipo é necessário que 
 * esse função itere os filhos listados na prop "children" e crie para 
 * cada um deles a estrutura correta. 
 * 
 * Caso o filho seja do tipo "object" devemos chamar recursivamente a função 
 * createDOM() passando ele como argumento.
 * 
 * Agora, se o filho não for do tipo "object" devemos criar um nó de texto com 
 * uma função presente na variável global "document"
 * 
 * A final a função deve inserir o filho na árvore do DOM criada e salva na variável
 * "dom".
 */
 function createDOM(element) {
  const dom = document.createElement(element.type)

  // Implementação aqui

  element.props.children.forEach(child => {
    let domChild 
    
    if (typeof child === 'object') {
      domChild = createDOM(child)
    } else {
      domChild = document.createTextNode(child)
    }

    dom.appendChild(domChild)
  })

  return dom
}

// Observação: A função createElement() foi refatorada para  atender a API do nosso React de maneira mais universal.
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}

function render(element, container) {
  const dom = createDOM(element)
  
  container.appendChild(dom)
}

export { createElement, render }


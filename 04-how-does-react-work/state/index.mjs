
function createElement(type, props, ...children){
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}

/**
 *  LET'S CODE
 * 
 * 1. Escrevendo a função useState]
 * 
 * Precisamos criar uma função de useState. Os hooks são basicamente o acesso a variáveis
 * em um escopo acima da função que guardam o estado em um array.
 * 
 * Para implementar o useState a primeira coisa que precisamos fazer é criar uma variável
 * "state" que recebe ou o valor salvo no índice do hook no array ou o estado inicial. 
 * 
 * Depois devemos implementar a função setState. Ela recebe um novo valor e salva no array
 * dos hooks. Depois é preciso rerenderizar a aplicação chamando a função render.
 * 
 * Ao final da função é preciso incrementar a variável hookIndex e então retornar o estado e a função setState num array. 
 * 
 */  
let hooks = []
let hookIndex = 0

function useState(initialState){
  // Salvamos o index em uma nova variável para que ele não muda na hora de executar 
  // a função setState. O nome disso é closure. 
  let index = hookIndex
  const state = hooks[index] || initialState

  function setState(newState) {
    hooks[index] = newState
    render()
  }

  hooks[index]++

  return [state, setState]
}


function createDOM(element){
  if(element.type instanceof Function) {
    return createDOM(element.type(element.props))
  }

  const dom = document.createElement(element.type)

  const isProperty = key => key !== "children"

  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach(child =>
     
    dom.appendChild(
      typeof child === 'object'
       ? createDOM(child, dom)
       : document.createTextNode(child)
    ))

  return dom

}

let _container, _element, _dom

// Observação
// Refatoramos a função render para utilizar algumas closures para que ela possa ser chamada pelos hooks. 
// Ainda zeremos o hookIndex para que a cada renderização executemos cada hook. 
function render (element = _element, container = _container) {

  const dom = createDOM(element)

  _element = element
  _container = container

  _dom ? container.replaceChild(dom, _dom) : container.appendChild(dom);

  _dom = dom
  hookIndex = 0
}

export { createElement, render, useState };
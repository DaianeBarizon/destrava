function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}

function isProperty (key) { 
  return key !== "children"
}

function addAttributes(element, dom){
  const { props } = element

  Object.keys(props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = props[name]
    })
}

function createChildren(element, dom){
  const { props: { children } } = element

  children.forEach(child => {
    let domChild 
    if (typeof child === 'object') 
      domChild = createDOM(child)
    else 
      domChild = document.createTextNode(child)

    dom.appendChild(domChild)
  })
}


// TODO
/**
 * LET'S CODE
 * 
 * 1. Adicionando a criação do DOM para componentes
 * 
 * O type do nosso componente, ao invés de ser um elemento em sí, é uma função que retorna um elemento.
 * 
 * Portanto precisamos colocar uma condicional na função createDOM que, 
 * caso a o "type" argumento "element" seja uma instância de Function, deve retornar 
 * uma nova chamada para createDOM recebendo o resultado da chamada de element.type(element.props)
 * 
 * 
 */

function createDOM(element) {

  // Implemente aqui

  if (element.type instanceof Function) {
    return createDOM(element.type(element.props))
  }

  const dom = document.createElement(element.type)

  createChildren(element, dom)

  addAttributes(element, dom)

  return dom
}

function render(element, container) {
  const dom = createDOM(element)
  
  container.appendChild(dom)
}

export { render, createElement }

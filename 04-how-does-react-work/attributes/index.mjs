/** 
 * LET'S CODE
 * 
 * 1. Adicionando atributos
 * 
 * Nossos componentes ainda não recebem os atributos do HTML como props.
 * 
 * Um elemento de anchor (<a>) , por exemplo, ainda não receberia o atributo "href"
 * 
 * Vamos arrumar isso na função addAttributes abaixo.
 * 
 * Para isso precisamos iterar as props com Object.keys(), excluindo a de children, 
 * e adicionar ao DOM cada uma pelo nome. 
 * 
 */
 function addAttributes(element, dom){
  const { props } = element

  console.log(props)
  console.log(dom)

  Object.keys(props)
  .filter(isProperty)
  .forEach(item => {
    dom[item] = props[item]
  })
}

function isProperty (key) { 
  return key !== "children"
}
/** 
 * LET'S CODE
 * 
 * 2. Chamando a função  
 * 
 * Precisamos agora chamar a função addAttributes() dentro da função createDOM()
 */
function createDOM(element) {
  const dom = document.createElement(element.type)

  createChildren(element, dom)

  addAttributes(element, dom)

  return dom
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  }
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


function render(element, container) {
  const dom = createDOM(element)
  
  container.appendChild(dom)
}

export { render, createElement }


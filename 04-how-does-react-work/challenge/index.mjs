// TODO
function createElement(type, props, ...children){
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}

let hooks = []
let hookIndex = 0

export function useState(initialState){
  let _index = hookIndex
  const state = hooks[_index] || initialState

  function setState(newValue){
    hooks[_index] = newValue
    render()
  }

  hookIndex++

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

function render (element = _element, container = _container) {

  const dom = createDOM(element)

  console.log(dom)

  _element = element
  _container = container

  _dom ? container.replaceChild(dom, _dom) : container.appendChild(dom);

  _dom = dom
  hookIndex = 0
}

export { createElement, render };
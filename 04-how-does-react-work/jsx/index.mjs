function createDOM(element) {
  const dom = document.createElement(element.type);

  const domChild = document.createTextNode(element.props.children)
    
  dom.appendChild(domChild)

  return dom;
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

function render(element, container) {
  const dom = createDOM(element)

  container.appendChild(dom)
}

export { render, createElement }

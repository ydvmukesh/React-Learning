function customRender(element, container ){
    const domElement = document.createElement( element.type)
domElement.innerHTML = element.children
domElement.setAttribute('href', element.props.href)
domElement.setAttribute('target', element.props.target='_blank' )
container.appendChild(domElement)
}

const reactElement = { 
    type: 'a',
    props: {
        href: 'http://reactjs.org',
        traget: '_blank'
    },
    children: 'Click me to'
}

const mainContainet = document.getElementById('root')

customRender(reactElement, mainContainet)
function customRender(reactElement,container){
    // const domElement =document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)
    
    
    //code for costom render in costom react
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if (prop == 'children') continue;//can ignore this line
        domElement.setAttribute(prop,reactElement.props[prop])
       //better than last commented one because there we are repeating the same syntax
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
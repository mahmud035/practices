function customRender(reactElement, mainContainer) {
  /*   
  const domElement = document.createElement(reactElement.type);
  domElement.innerText = reactElement.children;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);
  mainContainer.appendChild(domElement);
  */

  //* More dynamic way
  const domElement = document.createElement(reactElement.type);
  domElement.innerText = reactElement.children;

  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com/',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

const anotherReactElement = {
  type: 'img',
  props: {
    src: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Image of a tree & sun',
    width: '600px',
  },
};

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
customRender(anotherReactElement, mainContainer);

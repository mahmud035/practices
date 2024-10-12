const jsxElement = (
  <div id="root">
    <a href="https://www.google.com/" target="_blank">
      Click me to visit google
    </a>
    <img
      src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Image of a tree & sun"
      width="600px"
    />
  </div>
);

//* How a bundler (Babel / Vite / Webpack) compiles the above JSX into raw JavaScript object
const rawJsObject = /*#__PURE__*/ React.createElement(
  'div',
  { id: 'root' },
  /*#__PURE__*/ React.createElement(
    'a',
    {
      href: 'https://www.google.com/',
      target: '_blank',
    },
    'Click me to visit google'
  ),
  /*#__PURE__*/ React.createElement('img', {
    src: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Image of a tree & sun',
    width: '600px',
  })
);

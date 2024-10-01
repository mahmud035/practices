// JSX / ReactElement
<div id="root">
  <a href="https://www.google.com/" target="_blank">
    Click me to visit google
  </a>
  <img
    src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
    alt="Image of a tree &amp; sun"
    width="600px"
  />
</div>;

//* How bundler (Bable / Vite / Webpack) compile the above JSX / ReactElement into raw javaScript object

/*#__PURE__*/ React.createElement(
  'div',
  {
    id: 'root',
  },
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

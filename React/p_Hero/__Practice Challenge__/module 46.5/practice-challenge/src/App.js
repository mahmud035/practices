import './App.css';
import AllTodo from './Components/AllTodo/AllTodo';
import Blog from './Components/Blog/Blog';
import Mobile from './Components/Mobile/Mobile';

function App() {
  const titleStyled = {
    fontSize: '32px',
    color: 'teal',
    backgroundColor: 'green',
  };

  return (
    <div className="App">
      <article className="blog">
        <h2 style={titleStyled}>Blog Title</h2>
        <p style={{ color: 'green', fontSize: '20px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo
          asperiores itaque quis cupiditate. Cum fugit aliquid unde iusto fugiat
          dolorum perferendis, eius nesciunt vitae minima dolorem, id quos ex
          ducimus modi, amet labore quasi optio totam voluptate reiciendis
          similique accusantium qui! Quam sapiente dolorem assumenda doloribus
          consequatur praesentium eligendi.
        </p>
      </article>

      <Blog heading="hello" author="author1"></Blog>
      <Blog heading="hello2" author="author2"></Blog>
      <Blog heading="hello3" author="author3"></Blog>
      <Mobile></Mobile>
      <AllTodo></AllTodo>
    </div>
  );
}

export default App;

import './App.css';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';

function App() {
  let todos = [
    {
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
  ];

  return (
    <>
      <Header title="My Todo List" searchBar={true}></Header>
      <Todos></Todos>
      <Footer></Footer>
    </>
  );
}

export default App;

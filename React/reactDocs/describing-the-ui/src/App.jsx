import './App.css';
import Clock from './components/Clock';
import Gallery from './components/Gallery';
import List from './components/List';
import PackingList from './components/PackingList';
import Poem from './components/Poem';
import RecipeList from './components/RecipeList';
import TeaGathering from './components/TeaGathering';
import TeaSet from './components/TeaSet';

function App() {
  const date = new Date();
  const showTime =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  return (
    <div>
      <Gallery />
      <PackingList />
      <List />
      <RecipeList />
      <TeaSet />
      <Clock showTime={showTime} color="red" />
      <Poem />
      <TeaGathering />
    </div>
  );
}

export default App;

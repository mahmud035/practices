import './App.css';
import BucketList from './components/BucketList';
import BucketList2 from './components/BucketList2';
import BucketList3 from './components/BucketList3';
import Counter from './components/Counter';
import CounterList from './components/CounterList';
import FeedbackForm from './components/FeedbackForm';
import FeedbackForm2 from './components/FeedbackForm2';
import Form from './components/Form';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import Form5 from './components/Form5';
import Form6 from './components/Form6';
import Form7 from './components/Form7';
import Gallery from './components/Gallery';
import List from './components/List';
import List2 from './components/List2';
import List3 from './components/List3';
import List4 from './components/List4';
import MovingDot from './components/MovingDot';
import RequestTracker from './components/RequestTracker';
import Scoreboard from './components/Scoreboard';
import ShapeEditor from './components/ShapeEditor';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCart2 from './components/ShoppingCart2';
import Signup from './components/Signup';
import StateChallenge2 from './components/StateChallenge2';
import TaskApp from './components/TaskApp';
import Toolbar from './components/Toolbar';
import Toolbar2 from './components/Toolbar2';
import Toolbar3 from './components/Toolbar3';
import Toolbar4 from './components/Toolbar4';
import TrafficLight from './components/TrafficLight';

function App() {
  return (
    <div>
      <Toolbar
        onPlayMovie={() => alert('Playing')}
        onUploadImage={() => alert('Uploading')}
      />

      <Gallery />
      <Form />
      <Counter />
      <Form2 />
      <BucketList />
      <Toolbar2 />
      <Toolbar3 />
      <Toolbar4 />
      <Signup />
      <StateChallenge2 />
      <FeedbackForm />
      <FeedbackForm2 />
      <Form3 />
      <TrafficLight />
      <RequestTracker />
      <MovingDot />
      <Form4 />
      <Form5 />
      <Form6 />
      <Form7 />
      <Scoreboard />
      <List />
      <List2 />
      <ShapeEditor />
      <CounterList />
      <List3 />
      <List4 />
      <BucketList2 />
      <BucketList3 />
      <ShoppingCart />
      <ShoppingCart2 />
      <TaskApp />
    </div>
  );
}

export default App;

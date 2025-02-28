import StateCounter from './components/useState/StateCounter';
import TodoList from './components/useState/TodoList';
import UserProfile from './components/useState/UserProfile';

export default function App() {
  return (
    <div>
      {/* PropsTypes */}
      {/* <User name="Alice" age={30} isStudent={true} />
      <Button
        label="Click Me"
        onClick={() => alert('You clicked me!')}
        disabled={false}
      /> */}

      {/* useState */}
      <StateCounter />
      <UserProfile />
      <TodoList />

      {/* useEffect */}
      {/*  <Product />
      <UserList /> */}
    </div>
  );
}

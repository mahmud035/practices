import Gallery from './Gallery';
import List from './List';
import PackingList from './PackingList';
import ProfileTwo from './ProfileTwo';
import './style.css';
import TodoList from './TodoList';
import TodoListTwo from './TodoListTwo';

export default function App() {
  return (
    <div>
      <h1>Your first component</h1>
      <p>
        React applications are built from isolated pieces of UI called
        components. A React component is a JavaScript function that you can
        sprinkle with markup. Components can be as small as a button, or as
        large as an entire page. Here is a Gallery component rendering three
        Profile components:
      </p>
      <Gallery />
      <br />
      <br />

      {/* ---------- */}
      <h1>Writing markup with JSX</h1>
      <p>
        Each React component is a JavaScript function that may contain some
        markup that React renders into the browser. React components use a
        syntax extension called JSX to represent that markup. JSX looks a lot
        like HTML, but it is a bit stricter and can display dynamic information.
      </p>
      <TodoList />
      <br />
      <br />

      {/* ---------- */}
      <h1>JavaScript in JSX with curly braces</h1>
      <p>
        JSX lets you write HTML-like markup inside a JavaScript file, keeping
        rendering logic and content in the same place. Sometimes you will want
        to add a little JavaScript logic or reference a dynamic property inside
        that markup. In this situation, you can use curly braces in your JSX to
        “open a window” to JavaScript:
      </p>
      <TodoListTwo />
      <br />
      <br />

      {/* ---------- */}
      <h1>Passing props to a component</h1>
      <p>
        React components use props to communicate with each other. Every parent
        component can pass some information to its child components by giving
        them props. Props might remind you of HTML attributes, but you can pass
        any JavaScript value through them, including objects, arrays, functions,
        and even JSX!
      </p>
      <ProfileTwo />
      <br />
      <br />

      {/* ---------- */}
      <h1>Conditional rendering</h1>
      <p>
        Your components will often need to display different things depending on
        different conditions. In React, you can conditionally render JSX using
        JavaScript syntax like if statements, &&, and ? : operators.
      </p>
      <p>
        In this example, the JavaScript && operator is used to conditionally
        render a checkmark:
      </p>
      <PackingList />
      <br />
      <br />

      {/* ---------- */}
      <h1>Rendering lists</h1>
      <p>
        You will often want to display multiple similar components from a
        collection of data. You can use JavaScript’s filter() and map() with
        React to filter and transform your array of data into an array of
        components.
      </p>
      <p>
        For each array item, you will need to specify a key. Usually, you will
        want to use an ID from the database as a key. Keys let React keep track
        of each item’s place in the list even if the list changes.
      </p>
      <List />
      <br />
      <br />
    </div>
  );
}

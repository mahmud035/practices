import TodoApp from './components/ChatGPT&Deepseek/TodoApp';
import NoteApp from './Projects/1. Note App/NoteApp';
import RecipeApp from './Projects/2. Recipe App/RecipeApp';
import ExpenseTrackerApp from './Projects/3. Expense Tracker App/ExpenseTrackerApp';
import MealApp from './Projects/4. Meals App/MealApp';
import FormBuilder from './Projects/5. Form Builder App/FormBuilder';

export default function App() {
  return (
    <div>
      {/* NOTE: ChatGPT & Deepseek */}

      {/* <Counter />
      <User />
      <TodoApp />
      <TicTacToe /> */}

      {/* NOTE: Projects */}

      <NoteApp />
      <RecipeApp />
      <ExpenseTrackerApp />
      <MealApp />
      <FormBuilder />
      <TodoApp />
    </div>
  );
}

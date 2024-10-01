import './App.css';
import About from './myComponents/About';
import Navbar from './myComponents/Navbar';
import TextForm from './myComponents/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      <div className="container my-4">
        {/* <TextForm heading="Enter The Text to Analyze Below"></TextForm> */}
        <About></About>
      </div>
    </>
  );
}

export default App;

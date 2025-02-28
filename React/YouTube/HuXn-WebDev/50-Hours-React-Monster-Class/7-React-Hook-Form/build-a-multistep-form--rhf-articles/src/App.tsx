import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/Steps/About';
import Confirm from './components/Steps/Confirm';
import Contact from './components/Steps/Contact';
import Education from './components/Steps/Education';
import Stepper from './components/Steps/Stepper';
import AppStateProvider from './contexts/AppStateContext';

export default function App() {
  return (
    <div className="App">
      <AppStateProvider>
        <Router>
          <Stepper />
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </Router>
      </AppStateProvider>
    </div>
  );
}

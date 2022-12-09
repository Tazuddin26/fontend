import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Links from './Link';
import Timeatt from './Timeatten';
import Timemanage from './Timemanagement';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Links />} />
      <Route path="/timeatt" element={<Timeatt />} />
      <Route path="/timemanage" element={<Timemanage/>} />
      </Routes>
    </div>
  );
}

export default App;

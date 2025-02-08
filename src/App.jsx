import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Timer from './components/Timer/Timer';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;
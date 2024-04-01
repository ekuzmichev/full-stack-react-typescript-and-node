import { Route, Routes } from 'react-router';
import AnotherScreen from './AnotherScreen';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/another" element={<AnotherScreen />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

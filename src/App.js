import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Bot from './components/Bot';

function App() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <About/>
      <Bot/>
    </div>
  );
}

export default App;

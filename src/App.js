import logo from './logo.svg';
import './App.css';
import { readSessionConfig } from "./readConfig"



function App() {
  return (
    <div className="App">
      <button onClick={readSessionConfig}>test button</button>
    </div>
  );
}

export default App;

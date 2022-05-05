import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const compromises = ['estudar', 'exercitar', 'concluir'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {Task('Hello, World')}
        {compromises.map((item) => Task(item))}
        </div>
      </header>
    </div>
  );
}

export default App;

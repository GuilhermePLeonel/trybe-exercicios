import logo from './logo.svg';
import './App.css';
import './Header.jsx';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{Header()}</div>
        <div>{Content()}</div>
        <div>{Footer()}</div>
      </header>
    </div>
  );
}

export default App;

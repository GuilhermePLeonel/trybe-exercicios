import './App.css';
import React from 'react';
import Form from './components/Form';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <p>Formulário</p>
          <Form />
        </header>
      </div>
    );
  }
}

export default App;

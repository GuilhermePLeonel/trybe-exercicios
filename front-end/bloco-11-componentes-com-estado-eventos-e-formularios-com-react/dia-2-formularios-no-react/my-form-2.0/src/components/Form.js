
import React from 'react';



class Form extends React.Component {

  constructor() {
    super();

    this.Change = this.Change.bind(this)
    this.Blur = this.Blur.bind(this)

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '', 
      estado: '',
      confirmado: false,
      error: ''
    };
  }
  

  Change (event) {
    if (event.target.type === 'checkbox') {
      this.setState({
      [event.target.name]: event.target.checked
    })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  Blur () {
    console.log(isNaN(this.state.cidade));
    if ( isNaN(this.state.cidade) === false ) {
      this.setState({
        cidade: ''
      })
    }
  }

  render(){
    const { nome, email, cpf, confirmado, endereço, cidade, estado } = this.state
    return (
      <div >
        <form className="form">
        <fieldset>
          <label >
            Nome:
            <input
              name='nome'
              value={nome.toUpperCase()}
              onChange={this.Change}
              type='text'
              placeholder='escreva aqui !'
              maxLength="40"
              required>
            </input>
          </label>
          <br/>
          <label >
          Email:
            <input name='email' value={email} onChange={this.Change} type='email' placeholder='escreva aqui !' maxLength="50" required></input>
          </label>
          <br/>
          <label >
           Cpf:
            <input name='cpf' value={cpf} onChange={this.Change} type='text' placeholder='escreva aqui !' maxLength="11" required></input>
          </label>
          <br />
          <label >
           Endereço:
            <input name='endereço' value={endereço.replace(/[^a-zA-Zs]/g, " ")} onChange={this.Change} type='text' placeholder='escreva aqui !' maxLength="200" required></input>
          </label>
          <br/>
          <label >
           Cidade:
            <input name='cidade' value={cidade} onBlur={this.Blur} onChange={this.Change} type='text' placeholder='escreva aqui !' maxLength="28" required></input>
          </label>
          <br/>
           <label >
           Estado:
            <input name='estado' value={estado} onChange={this.Change} type='ComboBox' placeholder='escreva aqui !' maxLength="28" required></input>
          </label>
          </fieldset>
          <br/>
          <label >
           confirmado:
            <input name='confirmado' value={confirmado} onChange={this.Change} type='checkbox' placeholder='escreva aqui !'></input>
          </label>
          <br/>
          <button type='submit'>Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;

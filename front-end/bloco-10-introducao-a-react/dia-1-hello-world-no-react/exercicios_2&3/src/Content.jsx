import logo from './logo.svg';
import './App.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

function Content() {
  return (
    <div>{conteudos.map((keys) => <p> 
    {`O conteúdo é: ${keys.conteudo},
    Status: ${keys.bloco},
    Bloco: ${keys.status}`}
    </p>)}
    </div>
  );
}

export default Content;
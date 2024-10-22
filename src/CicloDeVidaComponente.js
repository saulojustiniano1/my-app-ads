import React, { Component } from 'react';
import './CicloDeVidaComponente.css';

class CicloDeVidaComponente extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState((prevState) => ({ contador: prevState.contador + 1 }));
  };
  render() {
    console.log('render');
    return (
      <>
        <div class="main">
          <h1>Ciclo de Vida do Componente</h1>
          <p>Contador: {this.state.contador}</p>
          <button onClick={this.handleClick}>Incrementar</button>
        </div>

        <div>
          <h2>Console</h2>
          <div class="console">
            <p>Abra o console do navegador para ver as mensagens.</p>

            <p>Atualize o componente clicando no botão "Incrementar".</p>
          </div>
        </div>
      </>
    );
  }
}
export default CicloDeVidaComponente;

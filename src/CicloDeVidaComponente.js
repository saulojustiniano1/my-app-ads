import React, { Component } from 'react';

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
      <div>
        <h1>Ciclo de Vida do Componente</h1>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.handleClick}>Incrementar</button>
      </div>
    );
  }
}
export default CicloDeVidaComponente;

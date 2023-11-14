import { Component } from 'react';
import './App.css'

//$ Componentes funcionais e componentes de classe 

export default class App extends Component {

  constructor(props) {
    super(props)
    this.handlePClick = this.handlePClick.bind(this) //$ Vai apontar para o this

    this.state = {
      name: 'Weder Natanael',
      counter: 0
    }
  }

  //$ Não é arrou function precisa fazer um bind, pois há um this interno
  handlePClick() {
    console.log(`<p> clicado por: ${this.state.name}`)
    this.setState({ name: 'Clicou' })
  }

  //$ Não tem this interno, aponta para o this geral
  handleAClick = (event) => {
    event.preventDefault()
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  render() {
  const { name, counter } = this.state

    return(
      <div className="App">
        <h1>Hello, world!</h1>
        <p onClick={this.handlePClick}>{name}</p>
        <a href="#" onClick={this.handleAClick}>Clicou no link: {counter} vezes</a>
      </div>
    )
  }
}

// export default function App() {
//   return(
//     <div className="App">
//       <h1>Hello, world!</h1>
//     </div>
//   )
// }
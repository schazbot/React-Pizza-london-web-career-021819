import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    allThePizzas: [],
    selectedPizza: null
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(data => this.setState({
        allThePizzas: data
      }))
  }

  selectPizza = (pizza) => {
    this.setState({
      selectedPizza: pizza
    })
  }

  editPizza = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(this.state.selectedPizza)
    })
      .then(resp => resp.json())
      .then(pizza => this.setState({
        allThePizzas: [...this.state.pizzas, pizza],
        selectedPizza: null
      })
      )
  }

  handleChange = (e) => {
    this.setState({ ...this.state.selectedPizza, topping: e.target.value });

  }


  render() {

    return (
      <Fragment>
        <Header />
        <PizzaForm allThePizzas={this.state.allThePizzas} selectedPizza={this.state.selectedPizza}
          handleChange={this.handleChange} />
        <PizzaList allThePizzas={this.state.allThePizzas} selectPizza={this.selectPizza} />
      </Fragment>
    );
  }
}

export default App;

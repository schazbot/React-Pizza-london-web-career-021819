import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.allThePizzas.map((pizza, index) => <Pizza pizza={pizza} key={index} selectPizza={this.props.selectPizza} />)
          }
        </tbody>
      </table>
    );
  }

}



export default PizzaList;

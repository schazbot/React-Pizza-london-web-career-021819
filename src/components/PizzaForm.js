import React from "react"

const PizzaForm = (props) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input type="text" className="form-control" placeholder="Pizza Topping" 
        onChange={e => props.handleChange(e)} 
        value={
          props.selectedPizza ? props.selectedPizza.topping : null
        } />
      </div>
      <div className="col">
        <select value={props.selectedPizza ? props.selectedPizza.size : null} className="form-control">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input className="form-check-input" type="radio" value="Vegetarian" checked={props.selectedPizza ? props.selectedPizza.vegetarian === true : null} />
          <label className="form-check-label">
            Vegetarian
            </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" value="Not Vegetarian" checked={props.selectedPizza ? props.selectedPizza.vegetarian === false : null} />
          <label className="form-check-label">
            Not Vegetarian
            </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={() => this.editPizza()}>Submit</button>
      </div>
    </div>

  )
}

export default PizzaForm

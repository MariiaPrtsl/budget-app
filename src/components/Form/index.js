import { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state={
        value:0
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
  };

  onChange =(e) =>{

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="balance" 
        placeholder="Сума" 
        type="number"
        onChange={this.onChange}/>
        <button>Зберегти</button>
      </form>
      
    );
  }
}

export default Form;

import { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state={
        value:""
    }
  }
  onSubmit = (e) => {
    e.preventDefault()

    this.props.onChange(this.state.value);
   };

  onChange =(e) =>{
const {value} = e.target.value;

this.setState({
    value
})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="balance" 
        placeholder="Сума" 
        type="number"
        value={this.state.value}
        onChange={this.onChange}/>
        <button>Зберегти</button>
      </form>
      
    );
  }
}

export default Form;
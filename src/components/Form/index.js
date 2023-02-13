import { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();
    
    this.state ={
        value: ''
    }

  }
  onSubmit = (e) => {
    e.preventDefault();

    this.props.onChange(this.state.value);
    this.setState({
        value:''
    })
   };

onChange = (e) => {
const {value} = e.target;

this.setState({
    value: +value
})
}


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="balance" 
        placeholder="Сума"
        type = "number"
        onChange={this.onChange}
        value={this.state.value}/> 
        <button>Зберегти</button>
      </form>
      
    );
  }
}
Form.propTypes = {
    onChange: PropTypes.func
}


export default Form;
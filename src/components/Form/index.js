import { Component } from "react";
import PropTypes from 'prop-types';
import {Wrapper, Input, Row, Button, Comment} from './styles'
class Form extends Component {
  constructor() {
    super();
    
    this.state ={
        value: '',
        date: new Date().toISOString().substring(0,10) ,
        comment:''
    }

  }
  onSubmit = (e) => {
    e.preventDefault();

    this.props.onChange(this.state);
    this.setState({
        value:'',
        comment:''
    })
   };

onChange = (e) => {
const {value, name} = e.target;

this.setState({
    [name]: value
})
}


  render() {
    return (
      <Wrapper>
      <form onSubmit={this.onSubmit}>
        <Row>
        <Input type = "date"
        name = "date"
        value ={this.state.data}
        onChange={this.onChange} />
        
        <Input name="value" 
        placeholder="Сума"
        type = "number"
        onChange={this.onChange}
        value={this.state.value}/> 
        </Row>
<Row>
        <Comment name="comment"
        value = {this.state.comment}
        onChange={this.onChange}/>
        <Button>Зберегти</Button>
        </Row>
      </form>
      </Wrapper>
    );
  }
}
Form.propTypes = {
    onChange: PropTypes.func
}


export default Form;
import React from "react";
import { Wrapper, GlobalStyle } from "./styles";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Statistics from "../Statistics";
import Header from '../Header';
import { open } from '../../utils/indexdb';



class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          loading: true
      }
  }

  componentDidMount() {
      open().then(() => {
          this.setState({
              loading: false
          })
      }).catch(() => {
          console.error('Помилка')
      });
  }

  render() {
      if (this.state.loading) {
          return <div>Loading...</div>
      };

      return (
          <Router>
              <Wrapper>
                  <GlobalStyle/>
                  
                      <Header/>
  
                      <Routes>
                          <Route path="/about" element={<About />} /> 
                          <Route path="/statistics" element={ <Statistics />}/>
                          <Route path="/" element={ <Home />} />
                        </Routes>
              </Wrapper>
          </Router>
      )
  }
  
}

export default App;

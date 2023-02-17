import { Wrapper, GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Statistics from "../Statistics";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/about" element = {<About/>}/>
          <Route exact path="/statistics" element = {<Statistics/>}/>
          <Route exact path="/" element = {<Home/>}/>
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;

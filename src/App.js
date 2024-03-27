import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "./utils/Themes";
import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import Education from './Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Webinar from './components/Webinar';
import Insight from './components/Insights';
import Philanthropy from './components/Philantropy';

const Body = styled.div`
background-color:#eeeef2;
width:100%;
height:100%;
overflow-x:hidden
`;


const Wrapper = styled.div`
/* background: linear-gradient(
  38.73deg,
  rgba(204,0,187,0.15) 0%,
  rgba(201,32,184,0) 50%
  ),
  linear-gradient(
  141.27deg,
  rgba(0,70,209,0) 50%,
  rgba(0,70,209,0.15) 100%
  ); */
width: 100%;
`;
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
      <Body>
      <div className='container'>
        <Navbar/>
          <Hero/>
          <Wrapper>        
          <About/>
          <Events/>
          <Insight/>
          <Philanthropy/>
          <Webinar/>
          <Footer/>
          </Wrapper>
          </div>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Github from './components/Github';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import { CommunicationSkills } from './components/CommunicationSkills';

function App() {
  return (
    <div style={{background:"rgb(51,65,85)"}}>
        <Navbar/>
      <Home/>
      {/* <About/> */}
      <Skills/>
      <CommunicationSkills/>
      <Project/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;

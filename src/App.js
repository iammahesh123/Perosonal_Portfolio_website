import logo from './logo.svg';
import './App.css';
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Intro />
      <Nav />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;

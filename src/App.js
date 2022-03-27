import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Services />
      <Prices />
      <About />
      <Contact />
    </div>
  );
}

export default App;

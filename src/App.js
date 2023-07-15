import './App.css';
import Header from './header.js';
import Home from "./home.js";
// import Skills from "./skills.js";
import About from './about.js';
import Projects from './gallery.js';
import Footer from './footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Home/>
        <About/>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

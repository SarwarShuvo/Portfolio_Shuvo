import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Volunteer from './Components/Volunteer/Volunteer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Experience></Experience>
      <Education></Education>
      <Projects></Projects>
      <Volunteer></Volunteer>
      <Contact></Contact>
      <Footer></Footer>
    </div>

  );
}

export default App;

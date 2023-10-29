import './App.scss';


import { Route, Routes } from "react-router-dom"
import Nav from './components/navComponent/Nav'
import Home from './pages/homePage/Home';
import About from './pages/aboutPage/About';
import Contact from './pages/contactPage/Contact';

function App() {
  return (
    <div className="App">
     <Nav />


<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


    </Routes>
    </div>
  );
}

export default App;

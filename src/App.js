import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import About from '../src/pages/About';
import Portfolio from '../src/pages/Portfolio';
import Contact from '../src/pages/Contact';
import Resume from '../src/pages/Resume';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
       

        <div className="container"> 

        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />         
        </Routes>
        
        </div>
      </div>   
      <Footer />    
    </Router>

  );
}

export default App;

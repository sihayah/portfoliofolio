import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import About from '../src/pages/About';
import Develop from '../src/pages/Develop';
import Design from '../src/pages/Design';
import Contact from '../src/pages/Contact';
import Resume from '../src/pages/Resume';
import Planting from '../src/pages/Planting';
import Bbyy from '../src/pages/Bbyy';
import MessageGhost from '../src/pages/MessageGhost';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Router>
      <div className="App" id='outer-container'>
        <div id='page-wrap'>
          <Header />  
          <div className="container"> 
          
          <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/Develop" element={<Develop />} />
              <Route path="/Design" element={<Design />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/planting" element={<Planting />} />
              <Route path="/bbyy" element={<Bbyy />} />
              <Route path="/messageghost" element={<MessageGhost />} />
              <Route path="*" element={<NotFound />} />         
          </Routes>
          </div>
          <Footer />  
        </div>
      </div>   
    </Router>

  );
}

export default App;

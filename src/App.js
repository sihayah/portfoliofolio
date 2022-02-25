import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import About from '../src/pages/About';
import Portfolio from '../src/pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className="container">
        <Switch>
          <Route exact path="/" component={About} />  
          <Route exact path="/portfolio" component={Portfolio} />  
        </Switch>
        
      </div>
    </div>
  );
}

export default App;

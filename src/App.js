import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact';
import Documentation from './pages/Documentation';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import { getData } from './services/Services';

function App() {


  const [info, setInfo] = useState({
    services: {
      title: '',
      servicesList: [],
    },
    benefits: {
      benefitsList: [],
      title: ''
    },
    documentation: {
      title: '',
      sections: []
    },
    pricing: {
      title: '',
      plans: []
    }
  });

  useEffect(() => {

    getData().then(res => res.json()).then(data => {
      setInfo(data)
    });
  }, [])

  debugger

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home services={info.services} pricing={info.pricing} />
          </Route>
          <Route path="/services">
            <Services services={info.services} />
          </Route>
          <Route path="/pricing">
            <Pricing pricing={info.pricing} />
          </Route>
          <Route path="/benefits">
            <Benefits benefits={info.benefits} />
          </Route>
          <Route path="/documentation">
            <Documentation documentation={info.documentation} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

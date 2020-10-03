import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Benefits from './pages/Benefits';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import { getData } from './services/Services';

function App() {


  const [info, setInfo] = useState({
    services:{
      title: '',
      servicesList: [],
    },
    benefits: {
      benefitsList:[],
      title: ''
    }
  });

  useEffect(() => {

    getData().then(res => res.json()).then(data => {
      setInfo(data)
    });
  }, [])


  return (
    <div className="App">
       <Router>
      <Header /> 
      <Switch>
        <Route exact path="/">
        <Home  services={info.services}/>
        </Route>
        <Route path="/services">
        <Services services={info.services} />
        </Route>
        <Route path="/pricing">
        <Pricing />
        </Route>
        <Route path="/benefits">
        <Benefits benefits={info.benefits} />
        </Route>
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

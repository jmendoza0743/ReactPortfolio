import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Home from './components/pages/Home';
// import Contact from './components/pages/Contact';
// import Portfolio from './components/pages/Portfolio';
import Navbar from './components/Navbar'; 
import Profilecontent from './components/Profilecontent'; 
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
   <Navbar />
    <Profilecontent />
    <Footer />
    {/* <Router>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/Portfolio' component={Portfolio} />
          <Route exact path = '/Contact' component={Contact} />
        </Switch>
      </Router> */}

    </div>
  );
}

export default App;
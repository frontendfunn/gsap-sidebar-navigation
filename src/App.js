import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import './style.scss';

// components
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Header from './components/Header';
import SidebarNav from './components/SidebarNav';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SidebarNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Aboutus} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/services" exact component={Services} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Terms from './components/Terms';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetail';
import Legrand from './components/Legrand';
import ABB from './components/ABB';
import IndoAsian from './components/IndoAsian';
import Schneider from './components/Schneider';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Faq" component={Faq}/>
      <Route exact path="/Terms" component={Terms}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/Blog" component={Blog}/>
      <Route exact path="/BlogDetails" component={BlogDetails}/>
      <Route exact path="/Legrand" component={Legrand}/>
      <Route exact path="/ABB" component={ABB}/>
      <Route exact path="/IndoAsian" component={IndoAsian}/>
      <Route exact path="/Schneider" component={Schneider}/>
      </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
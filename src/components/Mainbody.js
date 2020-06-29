import React from 'react'; 
import  Contact from './Contact';
import  Home from './Home';
import  About from './About';
import { Body } from './Body';
import { BrowserRouter, Route } from 'react-router-dom';
const Mainbody = () =>{

    return(
    <BrowserRouter>
      <Route exact path="/" component ={Home} />
      <Route path="/home" component ={Home} />
      <Route path="/contact" component ={Contact} />
      <Route path="/about" component ={About} />
      <Route path="/playground" component ={Body} />
    </BrowserRouter>
    );
}
export default Mainbody;
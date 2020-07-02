import React from 'react'; 
import { Body } from './components/Body';
import { Navbar } from './components/Navbar';
import {Editor}  from './components/Editor';

function App() {
  return (
    <div className="App">
    	<Navbar/>
    	<Editor/>
    </div>
  );
}

export default App;


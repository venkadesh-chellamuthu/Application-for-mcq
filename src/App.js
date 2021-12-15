import React from 'react'
import './App.css';
import McpQuis from './McpQuis'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LogIn from './LogIn';

function App() {


  return (
    <Router>
    <div className="container">
    <Routes>
    
    <Route exact path= "/" element={<LogIn/>} />
    <Route exact path= "/McpQuis" element={<McpQuis/>} />

    </Routes>
         
    </div>

    </Router>

  );
}

export default App;

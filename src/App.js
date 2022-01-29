import React from 'react';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './screen/Accueil/login';
import Contact from './screen/contact/contact';
import Insertion from './screen/contact/insertion';
import NewStudent from 'screen/ajout_nouv_etudiant/newStudent';

function App() {
    return (
    <BrowserRouter>
    
 
    <Routes>
    <Route exact path="/" element={<Login/>}/>
 
        <Route path="/login" element={<Login/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/insertion" element = {<Insertion/>}/>
        <Route path = "/newStudent" element = {<NewStudent/>}/>
        
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;

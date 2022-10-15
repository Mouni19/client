import React from 'react';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './screen/Accueil/login';
import Contact from './screen/contact/contact';
import Insertion from './screen/contact/studentManage';
import NewStudent from 'components/ajoutnouvetudiant/newStudent';
import DownloadExcel from './screen/downloadexcel/downloadExcel';
import Found from './screen/found/found';
import ListStudent from './screen/found/listStudent';
import AfficheStudentt from './screen/found/afficheStudentt';
import Modifier from './screen/found/modifier';
import ListAllStudents from './screen/allstudents/listAllStudents';
import AllStudents   from './screen/allstudents/allStudent';
import ModdulleInsertion from './components/moddulle_screen/moddulleManage';
import NewModdulle from 'components/moddulle_screen/screennewmoddulle/ajoutnouvmoddulle/ajoutNouvModdulle';
import FindModdulle from 'components/moddulle_screen/findModdulle';
import ListModdulle from 'components/moddulle_screen/listModdulle';
import AfficheModdullee from 'components/moddulle_screen/afficheModdullee';
import ListAllModdulles from 'components/moddulle_screen/allmoddulles/listAllModdulles';
import AllModdulles from 'components/moddulle_screen/allmoddulles/allModdulles';
import ModifierModdulle from 'components/moddulle_screen/modifierModdulle';
import ScreenNewModdulle from 'components/moddulle_screen/screennewmoddulle/screenNewModdulle';
import EpreuveInsertion from './components/epreuve_screen/epreuveManage';
import NewEpreuve from './components/epreuve_screen/screennewepreuve/ajoutnouvepreuve/ajoutNouvEpreuve';
import ScreenNewEpreuve from 'components/epreuve_screen/screennewepreuve/screenNewEpreuve';
import FindEpreuve from 'components/epreuve_screen/findEpreuve';
import ListEpreuve from 'components/epreuve_screen/listeEpreuve';
import AfficheEpreuve from 'components/epreuve_screen/afficheEpreuve';

//import ListStudent from 'screen/found/listStudent';

function App() {
    return (
    <BrowserRouter>
      <Routes>
    <Route exact path="/" element={<Login/>}/>
 
        <Route path="/login" element={<Login/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/studentManage" element = {<Insertion/>}/>
        <Route path = "/screenNewStudent" element = {<NewStudent/>}/>
        <Route path = "/downloadExcel" element = {<DownloadExcel/>}/>
        <Route path = "/found" element = {<Found/>}/>
        <Route path = "/listStudent" element = {<ListStudent/>}/>
        <Route path = "/afficheStudentt" element = {<AfficheStudentt/>}/>
        <Route path = "/modifier/:id" element = {<Modifier/>}/>
        <Route path = "/listAllStudents" element = {<ListAllStudents/>}/>
        <Route path = "/allStudents" element = {<AllStudents/>}/>
        <Route path = "/moddulleManage" element = {<ModdulleInsertion/>}/>
        <Route path = "/ajoutNouvModulle" element = {<NewModdulle/>}/>
        <Route path = "/findModdulle" element = {<FindModdulle/>}/>
        <Route path = "/listModdulle" element = {<ListModdulle/>}/>
        <Route path = "/afficheModdullee" element = {<AfficheModdullee/>}/>
        <Route path = "/modifierModdulle/:id" element = {<ModifierModdulle/>}/>
        <Route path = "/listAllModdulles" element = {<ListAllModdulles/>}/>
        <Route path = "/allModulles" element = {<AllModdulles/>}/>
        <Route path = "/screenNewModdulle" element ={<ScreenNewModdulle/>}/>
        <Route path = "/epreuveManage" element = {<EpreuveInsertion/>}/>
        <Route path = "/ajoutNouvEpreuve" element = {<NewEpreuve/>}/>
        <Route path = "/screenNewEpreuve" element ={<ScreenNewEpreuve/>}/>
        <Route path = "/findEpreuve" element = {<FindEpreuve/>}/>
        <Route path = "/listEpreuve" element = {<ListEpreuve/>}/>
        <Route path = "/afficheEpreuve" element = {<AfficheEpreuve/>}/>

      
        
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;

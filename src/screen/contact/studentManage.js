import React from 'react';
import {Button,Input} from "@material-ui/core";
import './studentManage.css';
import {Link} from "react-router-dom";

const Insertion = () =>{
    return(
    <div className='espace_étudiant'> 
       <h1>Gestion des étudiants</h1>

      {/* <Input type={Date} name='année détude'></Input>
       <Input type ={Date} name='année scolaire'></Input>*/}
       
       <Link to="/screenNewStudent"><Button>Ajouter un étudiant</Button></Link>
       <Link to="/downloadExcel"><Button>Ajouter à partir d'excel</Button></Link>
       <Link to="/found"><Button>Rechercher un étudiant</Button></Link>
       <Link to ="/allStudents"><Button >Afficher tous les étudiants</Button></Link>
    </div>
        
    );
}

export default Insertion;


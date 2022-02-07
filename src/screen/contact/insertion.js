import React from 'react';
import {Button,Input} from "@material-ui/core";
import './insertion.css';
import {Link} from "react-router-dom";

const Insertion = () =>{
    return(
    <div className='espace_étudiant'> 
       <h1>Gestion des étudiants</h1>

      {/* <Input type={Date} name='année détude'></Input>
       <Input type ={Date} name='année scolaire'></Input>*/}
       
       <Link to="/screenNewStudent"><Button>Ajouter un étudiant</Button></Link>
       <Button>Ajouter à partir d'excel</Button>
       <Button>Supprimer un étudiant</Button>
       <Button>Modifier un étudiant</Button>
       <Button>Rechercher un étudiant</Button>
       <Button>Afficher tous les étudiants</Button>
    </div>
        
    );
}

export default Insertion;


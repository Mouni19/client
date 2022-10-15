import React from 'react';
import {Button,Input} from "@material-ui/core";
import './moddulleManage.css';
import {Link} from "react-router-dom";

const ModdulleInsertion = () =>{
    return(
    <div className='espace_moddulle'> 
       <h1>Gestion des modules</h1>

            
       <Link to="/screenNewModdulle"><Button>Ajouter un module</Button></Link>
      <Link to="/findModdulle"><Button>Rechercher un module</Button></Link>
       <Link to ="/allModdulles"><Button >Afficher tous les modules</Button></Link>
    </div>
        
    );
}

export default ModdulleInsertion;


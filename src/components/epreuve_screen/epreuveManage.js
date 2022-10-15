import React from 'react';
import {Button,Input} from "@material-ui/core";
import './epreuveManage.css';
import {Link} from "react-router-dom";

const EpreuveInsertion = () =>{
    return(
    <div className='espace_epreuve'> 
       <h1>Gestion des épreuves</h1>

            
       <Link to="/screenNewEpreuve"><Button>Ajouter une epreuve</Button></Link>
      <Link to="/findEpreuve"><Button>Rechercher une epreuve</Button></Link>
    </div>
        
    );
}

export default EpreuveInsertion;


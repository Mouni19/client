import React from 'react';
import {Button,Input} from "@material-ui/core";
import './epreuveManage.css';
import {Link} from "react-router-dom";

    return(
    <div className='espace_epreuve'> 
       <h1>Gestion des épreuves</h1>
<h2>Tapez le module de l'épreuve</h2>
<Input name='designModule' type='String' placeholder='Désignation du module' onChange={(e)=>setDesignModule(e.target.value)}></Input>
            
       <Button onClick={epreuveDuModulle}>Rechercher une epreuve</Button>
       <div className='fenetre_epreuves'>
        <ul>
        </ul>
       </div>
    </div>
        
    );      
}

export default EpreuveInsertion;


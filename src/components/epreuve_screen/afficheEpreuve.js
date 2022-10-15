import React from 'react';
import {Button} from "@material-ui/core";
//import ListModdulle from './listModdulle';


const AfficheEpreuve=({epreuvePropp})=>{
     return(
<div>
    <div>{epreuvePropp.code_epreuve}</div>
    <div>{epreuvePropp.code_moddulle_e}</div>
    <div>{epreuvePropp.nature_epreuve}</div>
    <div>{epreuvePropp.code_epreuve}</div>
    <div>{epreuvePropp.année_epreuve}</div>
    
         
</div>
       
    )

}
export default AfficheEpreuve;
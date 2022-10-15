import React from 'react';
import {Button} from "@material-ui/core";
//import ListModdulle from './listModdulle';


const AfficheModdullee=({moddullePropp})=>{
     return(
<div>
    <div>{moddullePropp.code_moddulle}</div>
    <div>{moddullePropp.designation_moddulle}</div>
    
      
</div>
       
    )

}
export default AfficheModdullee;
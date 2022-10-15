import React from "react";
import { useState } from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom"; 
import './listModdulle.css';
import AfficheModdullee from "./afficheModdullee";
import ModifierModdulle from "./modifierModdulle"

const ListModdulle=({item, deleteModdulleProp})=>{

  const [afficheModdulle,setAfficheModdulle]=useState(false)
   const[moddulleProp,setModdulleProp] = useState(item);
  const supprimer=()=>{
   deleteModdulleProp(item);
    };

   const afficher=()=>{
     setAfficheModdulle(true);
      };
    const cacher=()=>{
      setAfficheModdulle(false);
    }; 
     
   
   if(afficheModdulle){

return(
  <div className="moddulle_affich">
  <AfficheModdullee moddullePropp={moddulleProp} />
  <div><Button onClick={cacher} >Retour</Button></div>
  <div> <Link to={`/modifierModdulle/`+item._id}>Modifier</Link></div>
  </div>
  )}
  else{

 return(
  <div className="recherch_window">
<div>{item.code_moddulle}</div>
<div>{item.designation_moddulle}</div>
<div><Button onClick={afficher}>Afficher</Button></div>
<div><Button onClick={supprimer}>Supprimer</Button></div>
</div>
 );
}
}
export default ListModdulle;
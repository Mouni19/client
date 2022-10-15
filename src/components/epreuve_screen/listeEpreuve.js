import React from "react";
import { useState } from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom"; 
import './listeEpreuve.css';
import AfficheEpreuve from "./afficheEpreuve";
//import ModifierEpreuve from "./modifierEpreuve"

const ListEpreuve=({item, deleteEpreuveProp})=>{

  const [afficheEpreuve,setAfficheEpreuve]=useState(false)
   const[epreuveProp,setEpreuveProp] = useState(item);
  const supprimer=()=>{
   deleteEpreuveProp(item);
    };

   const afficher=()=>{
     setAfficheEpreuve(true);
      };
    const cacher=()=>{
      setAfficheEpreuve(false);
    }; 
       
   if(afficheEpreuve){

return(
  <div className="epreuve_affich">
  <AfficheEpreuve epreuvePropp={epreuveProp} />
  <div><Button onClick={cacher}> Retour</Button></div>
  <div><Button>Uploader les notes</Button></div>
  <div><Button>Télécharger les notes</Button></div>
  {/*<div> <Link to={`/modifierEpreuve/`+item._id}>Modifier</Link></div>*/}
  </div>
  )}
  else{

 return(
  <div className="recherch_window">
<div>{item.code_epreuve}</div>
<div><Button onClick={afficher}>Afficher</Button></div>
<div><Button onClick={supprimer}>Supprimer</Button></div>
</div>
 );
}
}
export default ListEpreuve;
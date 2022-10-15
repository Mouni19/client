import React from "react";
import { useState } from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom"; 
import './listStudent.css';
import AfficheStudentt from "./afficheStudentt";
import Modifier from "./modifier"

const ListStudent=({item, deleteStudentProp})=>{

  const [affichStudent,setAffichStudent]=useState(false)
  //const [debut,setDebut]= useState(true)
//const [itemSelected,setItemSelected]=useState[{item}];
  //const [affichage,setAffichage] = useState("none");
  const[studentProp,setStudentProp] = useState(item);
  const supprimer=()=>{
   deleteStudentProp(item);
    };

   const afficher=()=>{
     setAffichStudent(true);
      };
    const cacher=()=>{
      setAffichStudent(false);
    }; 
    const modifierEtudiant=()=>{
      return(
      <Modifier/>
      )
    }    
   
   if(affichStudent){

return(
  <div>
  <AfficheStudentt studentPropp={studentProp} />
  <div><Button onClick={cacher} >Retour</Button></div>
  <div> <Link to={`/modifier/`+item._id}>Modifier</Link></div>
  </div>
  )}
  else{

 return(
  <div className="recherch_window">
<div>{item.matricule}</div>
<div>{item.nom}</div>
<div>{item.prenom}</div>
<div><Button onClick={afficher}>Afficher</Button></div>
<div><Button onClick={supprimer}>Supprimer</Button></div>
</div>
 );
}
}
export default ListStudent;
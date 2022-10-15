import React from 'react';
import {Button} from "@material-ui/core";


const AfficheStudentt=({studentPropp})=>{
     return(
<div>
    <div>{studentPropp.nom}</div>
    <div>{studentPropp.matricule}</div>
    <div>{studentPropp.nom}</div>
    <div>{studentPropp.prenom}</div>
   {/* <div>{student.dateNaissance}</div>
    <div>{student.lieuNaissance}</div>
    <div>{student.nationality}</div>
    <div>{student.firstInscription}</div>
    <div>{student.bac}</div>
    <div>{student.gendre}</div>
    <div>{student.type}</div>
    <div>{student.anneeEtude}</div>
    <div>{student.anneeScolaire}</div>*/}
      
</div>
       
    )

}
export default AfficheStudentt;
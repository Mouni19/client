import React from 'react';
import {Button} from "@material-ui/core";
const ListAllStudents = ({item})=>{
   
    return(
<div className="all_students">
<div>{item.matricule}</div>
<div>{item.nom}</div>
<div>{item.prenom}</div>
<div><Button>Exporter vers excel</Button></div>
</div>
    );
}
export default ListAllStudents;
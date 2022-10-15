import React,{useState,useEffect} from 'react';
import {Input,Button} from "@material-ui/core"; 
import axios from 'axios';
import API from 'appi/api';
import './found.css'
import ListStudent from './listStudent';
import AfficheStudentt from './afficheStudentt';
const Found = (req,res)=>{
    const [flastname,setFlastname]=useState("a");
    const [ffirstname,setFfirstname]=useState("");
    const [fmatricule,setFmatricule]=useState("");
    const [students,setStudents]= useState([]);
          const deleteStudent =(student)=>{
          (API.delete(`/student/${student.matricule}`));
          alert(`${student.nom} est supprimé avec succés`)
  };

   
        useEffect(async()=>{
           await (axios.get(`http://localhost:1337/student/studentss/${flastname}`)).then(
              (res)=>{setStudents(res.data);
                console.log(students);
                              
            }).catch((err)=>{console.log(err)});
                            },[flastname]);

                    return(
<div className='found_window'>
    <Input type='String' name='flastname'  placeholder='recherche par nom' onChange = {(e)=>setFlastname(e.target.value)}>
    </Input>
    <Input type='String' name='ffirstname' placeholder='recherche par prénom' onChange = {(e)=>setFfirstname(e.target.value)} >
    </Input>
    <Input type='String' name='fmatricule' placeholder='recherche par matricule' onChange = {(e)=>setFmatricule(e.target.value)} >
    </Input>
    
    <div className='tableau_rech_etu'>
      <ul>  
        {
           students.map(student =><ListStudent key = {student.id} item={ student } deleteStudentProp = { deleteStudent} /> 
           )
           }
           </ul>  
           
    </div>
   
</div>
    );
}
export default Found;

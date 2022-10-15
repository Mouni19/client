import React,{useState,useEffect} from 'react';
import {Input,Button} from "@material-ui/core"; 
import axios from 'axios';
import API from 'appi/api';
import './findEpreuve.css'
import ListEpreuve from './listeEpreuve';
//import AfficheEpreuve from './afficheEpreuve';
const FindEpreuve = (req,res)=>{
    const [codeE,setCodeE]=useState("");
    const [epreuves,setEpreuves]= useState([]);
   
        const deleteEpreuve =(epreuve)=>{
          console.log(`${epreuve.code_epreuve}`);
          (API.delete(`/epreuve/${epreuve.code_epreuve}`));
          alert(`${epreuve.code_epreuve} est supprimé avec succés`)
  };
   
        useEffect(async()=>{
           await (axios.get(`http://localhost:1337/epreuve/epreuvess/${codeE}`)).then(
              (res)=>{setEpreuves(res.data);
                console.log(epreuves);
                              
            }).catch((err)=>{console.log(err)});
                            },[codeE]);

                    return(
<div className='found_window'>
    <Input type='String' name='codeE'  placeholder='recherche par code dépreuve' onChange = {(e)=>setCodeE(e.target.value)}>
    </Input>
          
    <div className='tableau_rech_epr'>
      <ul>  
        {
           epreuves.map( epreuve =><ListEpreuve key = {epreuve.id} item={ epreuve } deleteEpreuveProp = { deleteEpreuve} /> 
           )
           }
           </ul>  
           
    </div>
   
</div>
    );
}
export default FindEpreuve;

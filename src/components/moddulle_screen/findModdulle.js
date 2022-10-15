import React,{useState,useEffect} from 'react';
import {Input,Button} from "@material-ui/core"; 
import axios from 'axios';
import API from 'appi/api';
import './findModdulle.css'
import ListModdulle from './listModdulle';
import AfficheModdullee from './afficheModdullee';
const FindModdulle = (req,res)=>{
    const [codeM,setCodeM]=useState("a");
    const [designationM,setDesignationM]=useState("");
    const [moddulles,setModdulles]= useState([]);
   
        const deleteModdulle =(moddulle)=>{
          console.log(`${moddulle.code_moddulle}`);
          (API.delete(`/moddulle/${moddulle.code_moddulle}`));
          alert(`${moddulle.designation_moddulle} est supprimé avec succés`)
  };
   
        useEffect(async()=>{
           await (axios.get(`http://localhost:1337/moddulle/moddulless/${designationM}`)).then(
              (res)=>{setModdulles(res.data);
                console.log(moddulles);
                              
            }).catch((err)=>{console.log(err)});
                            },[designationM]);

                    return(
<div className='found_window'>
    <Input type='String' name='codeM'  placeholder='recherche par code module' onChange = {(e)=>setCodeM(e.target.value)}>
    </Input>
    <Input type='String' name='designationM' placeholder='recherche par la désignation' onChange = {(e)=>setDesignationM(e.target.value)} >
    </Input>
       
    <div className='tableau_rech_mod'>
      <ul>  
        {
           moddulles.map( moddulle =><ListModdulle key = {moddulle.id} item={ moddulle } deleteModdulleProp = { deleteModdulle} /> 
           )
           }
           </ul>  
           
    </div>
   
</div>
    );
}
export default FindModdulle;

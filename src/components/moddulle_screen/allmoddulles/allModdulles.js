import React from 'react';
import axios from 'axios';
import API from 'appi/api';
import { useEffect,useState} from 'react';
import ListAllModdulles from './listAllModdulles';

const AllModdulles = (req,res)=>{
    const [moddulles,setModdulles]= useState([]);

    useEffect(async()=>{
        await (axios.get(`http://localhost:1337/moddulle/`)).then(
            (res)=>{setModdulles(res.data);
              console.log(moddulles);
                            
          }).catch((err)=>{console.log(err)});

    },[]);

        return(
            <div className='tableau_all_mod'>
            <ul>  
              {
                 moddulles.map(moddulle =><ListAllModdulles key = {moddulle.id} item={ moddulle } /> 
                 )
                 }
                 </ul>  
                 
          </div>
    );

}
export default AllModdulles;
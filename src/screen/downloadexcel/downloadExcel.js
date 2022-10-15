import React,{useState} from 'react';
import {Button,Input,FormControl} from "@material-ui/core";
import API from 'appi/api';
//const fs = require("fs");
const XLSX = require("xlsx");

const DownloadExcel = (req,res) =>{

    const[file,setFile] = useState('');

     const lire=async()=> {
        // const file1=req.data.files;
        //const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook =  XLSX.readFile(data);
        /////////////////////////accés à la feuille
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        const data1 = XLSX.utils.sheet_to_json(ws,{header:{rows: 1}});
        console.log(data1);
        API.post('/student/uploadStudent',data1).then(res=>{alert('OK')
}).catch(error=>{alert('error'.error)
})
     
    }
    return(
    <div className='fenetre_downloadExcel'> 
       <h1>choisissez le fichier</h1>

       <FormControl className='inser_excel'>  
     <Input type="file" name='file' placeholder='choisir' onChange={(e)=>setFile(e.target.files[0])}>
         </Input>
      <Button onClick={lire}>Envoyer</Button>
    </FormControl>
      
    </div>
        
    );
}

export default DownloadExcel;


import React from 'react';
import {Button} from "@material-ui/core";
import './noteManagement.css';

const NoteManagement=()=>{

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
<div>
    
  <h1>Choisissez une action</h1>  
  <FormControl className='inser_excel'>  
  <h3>Uploader les notes</h3>
     <Input type="file" name='file' placeholder='choisir' onChange={(e)=>setFile(e.target.files[0])}>
         </Input>
      <Button onClick={lire}>Envoyer</Button>
    </FormControl>
      
</div>
       
    )

}
export default NoteManagement;
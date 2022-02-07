import React from 'react';
import API from 'appi/api';
import {Button,Input,FormControl} from '@material-ui/core';
import { useState } from 'react';
//const apistudent = require('./router/user.router');

const NewStudent =()=>{

    const [matricule, setMatricule] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('')
   

    const send=()=>{
const data={matricule,nom,prenom}

  API.post('student/ajoutStudent',data).then(res=>{alert('OK')
}).catch(error=>{alert('error'.error)
})
    }
    return(
        <div className='screen_new_student'>
            <h3>Remplissez les champs SVP</h3>
            <FormControl>
                <Input type='String' name='matricule' placeholder='matricule' onChange={(e)=> setMatricule(e.target.value)}></Input>
                <Input type='String' name='nom' placeholder='le nom' onChange={(e)=> setNom(e.target.value)}></Input>
                <Input type='String' name='prenom' placeholder='le prénom' onChange={(e)=> setPrenom(e.target.value)}></Input>
                <Button onClick={send}>Ajouter</Button>
                
            </FormControl>
        </div>
    )

}
export default NewStudent;
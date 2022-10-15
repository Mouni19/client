import React from 'react';
import API from 'appi/api';
import {Button,Input,FormControl} from '@material-ui/core';
import { useState } from 'react';
//const apistudent = require('./router/user.router');

const NewEpreuve =()=>{

    const [code_epreuve, setCode_epreuve] = useState('');
    const [code_moddulle_e, setCode_moddulle_e] = useState('');
    const [date_epreuve, setDate_epreuve] = useState('');
    const [année_epreuve, setAnnée_epreuve] = useState('');
    const [nature_epreuve,setNature_epreuve] = useState('');
           
const send=()=>{
const data={code_epreuve,code_moddulle_e,date_epreuve,année_epreuve,
    nature_epreuve}

  API.post('epreuve/ajoutEpreuve',data).then(res=>{alert('OK')
}).catch(error=>{alert('error'.error)
})
    }
    return(
        <div className='screen_new_epreuve'>
            <h3>Remplissez les champs SVP</h3>
            <FormControl>
                <Input type='String' name='code_epreuve' placeholder='code de lépreuve' onChange={(e)=> setCode_epreuve(e.target.value)}></Input>
                <Input type='String' name='code_moddulle_e' placeholder='code du module de cette epreuve' onChange={(e)=> setCode_moddulle_e(e.target.value)}></Input>
                <Input type='date' name='date_epreuve' placeholder='la date de lepreuve' onChange={(e)=> setDate_epreuve(e.target.value)}></Input>
                <Input type='number' name='année_epreuve' placeholder='lannée de lépreuve' onChange={(e)=> setAnnée_epreuve(e.target.value)}></Input>
                <Input type='String' name='nature_epreuve' placeholder='le nature de lépreuve' onChange={(e)=> setNature_epreuve(e.target.value)}></Input>
                <Button onClick={send}>Ajouter l'épreuve</Button>
            </FormControl>
        </div>
    )

}
export default NewEpreuve;
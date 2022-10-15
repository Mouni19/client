import React from 'react';
import API from 'appi/api';
import {Button,Input,FormControl} from '@material-ui/core';
import { useState } from 'react';
//const apistudent = require('./router/user.router');

const NewModdulle =()=>{

    const [code_moddulle, setCode_moddulle] = useState('');
    const [designation_moddulle, setDesignation_moddulle] = useState('');
    const [coefficient, setCoefficient] = useState('');
    const [nombre_epreuves, setNombre_epreuves] = useState('');
    const [année, setAnnée] = useState('');
    const [epreuves, setEpreuves] = useState([]);
       
const send=()=>{
const data={code_moddulle,designation_moddulle,coefficient,
    nombre_epreuves,année,epreuves}

  API.post('moddulle/ajoutModdulle',data).then(res=>{alert('OK')
}).catch(error=>{alert('error'.error)
})
    }
    return(
        <div className='screen_new_moddulle'>
            <h3>Remplissez les champs SVP</h3>
            <FormControl>
                <Input type='String' name='code_moddulle' placeholder='code du module' onChange={(e)=> setCode_moddulle(e.target.value)}></Input>
                <Input type='String' name='designation_moddulle' placeholder='Désignation du module' onChange={(e)=> setDesignation_moddulle(e.target.value)}></Input>
                <Input type='number' name='coefficient' placeholder='le coéfficient' onChange={(e)=> setCoefficient(e.target.value)}></Input>
                <Input type='number' name='nombre_epreuves' placeholder='le nombre dépreuves' onChange={(e)=> setNombre_epreuves(e.target.value)}></Input>
                <Input type='number' name='année' placeholder='la année du modu module' onChange={(e)=> setAnnée(e.target.value)}></Input>
                <Input type='Array' name='epreuves' placeholder='les épreuves' onChange={(e)=> setEpreuves(e.target.value)}></Input>
                <Button onClick={send}>Ajouter le module</Button>
                
            </FormControl>
        </div>
    )

}
export default NewModdulle;
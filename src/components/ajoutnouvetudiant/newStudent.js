import React from 'react';
import API from 'appi/api';
import {Button,Input,FormControl} from '@material-ui/core';
import { useState } from 'react';
//const apistudent = require('./router/user.router');

const NewStudent =()=>{

    const [matricule, setMatricule] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [lieuNaissance, setLieuNaissance] = useState('');
    const [nationality, setNationality] = useState('');
    const [firstInscription, setFirstInscription] = useState('');
    const [bac, setBac] = useState('');
    const [gendre, setGendre] = useState('');
    const [type, setType] = useState('');
    const [anneeEtude, setAnneeEtude] = useState('');  
    const [anneeScolaire, setAnneeScolaire] = useState('');              
                  

    const send=()=>{
const data={matricule,nom,prenom,dateNaissance,lieuNaissance, 
    nationality,firstInscription,bac,gendre,type,anneeEtude,anneeScolaire}

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
                <Input type='Date' name='dateNaissance' placeholder='la date de naissance' onChange={(e)=> setDateNaissance(e.target.value)}></Input>
                <Input type='String' name='lieuNaissance' placeholder='le lieu de naissance' onChange={(e)=> setLieuNaissance(e.target.value)}></Input>
                <Input type='String' name='nationality' placeholder='la nationalité' onChange={(e)=> setNationality(e.target.value)}></Input>
                <Input type='Date' name='firstInscription' placeholder='date de premiére inscription' onChange={(e)=> setFirstInscription(e.target.value)}></Input>
                <Input type='Date' name='bac' placeholder='année du bac' onChange={(e)=> setBac(e.target.value)}></Input>
                <Input type='String' name='gendre' placeholder='le genre' onChange={(e)=> setGendre(e.target.value)}></Input>
                <Input type='String' name='type' placeholder='le type dinscription' onChange={(e)=> setType(e.target.value)}></Input>
                <Input type='Number' name='anneeEtude' placeholder='année étude' onChange={(e)=> setAnneeEtude(e.target.value)}></Input>                
                <Input type='String' name='anneeScolaire' placeholder='année scolaire' onChange={(e)=> setAnneeScolaire(e.target.value)}></Input>
                <Button onClick={send}>Ajouter</Button>
                
            </FormControl>
        </div>
    )

}
export default NewStudent;
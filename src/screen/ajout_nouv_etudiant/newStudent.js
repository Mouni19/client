import React from 'react';
import API from 'appi/api';
import {Button,Input,FormControl} from '@material-ui/core';
import { useState } from 'react';

const NewStudent =()=>{

    const [matricule, setMatricule] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('')
    const [dateNaissance, setDateNaissance] = useState('');
    const [lieuNaissance, setLieuNaissance] = useState('');
    const [genre, setGenre] = useState('')
    const [nationality, setNationality] = useState('');
    const [dateBac, setDateBac] = useState('')
    const [dateFirstInscription, setDateFirstInscription] = useState('');
    const [statut, setStatut] = useState('')
    const [annéeScolaire, setAnnéeScolaire] = useState('')
    const [annéeEnCours, setAnnéeEnCours] = useState('')


    const send=()=>{
const data={
    matricule,nom,prenom,dateNaissance,
    lieuNaissance,genre,nationality,dateBac,
    dateFirstInscription,statut,
    annéeScolaire,annéeEnCours
}
  API.post('/addStudent',data).then(res=>{alert('OK')
}).catch(error=>{alert('error')})
    }
    return(
        <div className='screen_new_student'>
            <h3>Remplissez les champs SVP</h3>
            <FormControl>
                <Input type='String' name='matricule' placeholder='matricule' onChange={(e)=> setMatricule(e.target.value)}></Input>
                <Input type='String' name='nom' placeholder='le nom' onChange={(e)=> setNom(e.target.value)}></Input>
                <Input type='String' name='prenom' placeholder='le prénom' onChange={(e)=> setPrenom(e.target.value)}></Input>
                <Input type='Date' name='dateNaissance' placeholder='date de naissance' onChange={(e)=> setDateNaissance(e.target.value)}></Input>
                <Input type='String' name='lieuNaissance' placeholder='lieu de naissance' onChange={(e)=>setLieuNaissance(e.target.value)}></Input>
                <Input type='String' name='genre' placeholder='genre' onChange={(e)=> setGenre(e.target.value)}></Input>
                <Input type='String' name='nationality' placeholder='nationalité' onChange={(e)=> setNationality(e.target.value)}></Input>
                <Input type='Date' name='dateBac' placeholder='date du bac' onChange={(e)=> setDateBac(e.target.value)}></Input>
                <Input type='Date' name='dateFirstInscription' placeholder='date de la premiére inscription' onChange={(e)=> setDateFirstInscription(e.target.value)}></Input>
                <Input type='String' name='statut' placeholder='statut' onChange={(e)=> setStatut(e.target.value)}></Input>
                <Input type='Date' name='annéeScolaire' placeholder='année scolaire' onChange={(e)=> setAnnéeScolaire(e.target.value)}></Input>
                <Input type='Date' name='annéeEnCours' placeholder='année en cours' onChange={(e)=> setAnnéeEnCours(e.target.value)}></Input>

                <Button onClick={send}>Ajouter</Button>
                
            </FormControl>
        </div>
    )

}
export default NewStudent;
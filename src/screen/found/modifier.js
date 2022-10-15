import React, {useEffect, useState,useRef}from 'react';
import {Button,Input,FormControl} from "@material-ui/core";
import API from 'appi/api';
//import { queryAllByAltText } from '@testing-library/react';
//import { Query } from '@testing-library/react';
import { useParams } from 'react-router-dom';


const Modifier=()=>{
   /* const [etudiantt,setEtudiantt]=useState({anneeEtude:'',anneeScolaire:'',bac:'',dateNaissance:'',firstInscription:'',
        gendre:'',lieuNaissance:'',matricule:'',nationality:'',nom:'',prenom:''});*/
        const [matricule, setMatricule] = useState("");
        const [nom, setNom] = useState("");
        const [prenom, setPrenom] = useState("");
        const [dateNaissance, setDateNaissance] = useState('');
        const [lieuNaissance, setLieuNaissance] = useState('');
        const [nationality, setNationality] = useState('');
        const [firstInscription, setFirstInscription] = useState('');
        const [bac, setBac] = useState('');
        const [gendre, setGendre] = useState('');
        const [type, setType] = useState('');
        const [anneeEtude, setAnneeEtude] = useState();  
        const [anneeScolaire, setAnneeScolaire] = useState(); 
        /*const matriculeRef = useRef();
        const nomRef = useRef(); */
    const params = useParams();

useEffect(()=>{
    getStudentDetails();
},[]) 
const getStudentDetails = async()=>{
    console.log(params);
    let result = await fetch(`http://localhost:1337/student/${params.id}`)
     
    result = await result.json();
    console.log(result);
    /*console.log("hhhhhhh"+data.student.nom);
    matriculeRef.current.value=result.matricule;
    nomRef.current.value=result.nom;
    console.warn(data.matricule);*/
   
    setMatricule(result.student.matricule);
    setNom(result.student.nom);
    setPrenom(result.student.prenom);
    setDateNaissance(result.student.dateNaissance);
    setLieuNaissance(result.student.lieuNaissance);
     setNationality(result.student.nationality);
    setFirstInscription(result.student.firstInscription);
      setBac(result.student.bac);
      setGendre(result.student.gendre);
     setType(result.student.type);
      setAnneeEtude(result.student.anneeEtude);
     setAnneeScolaire(result.student.anneeScolaire);
    } 
   
    const miseAjour=()=>{
console.warn({matricule},{nom});
const data = {
    matricule,nom,prenom,dateNaissance,lieuNaissance,nationality,
    firstInscription,bac,gendre,anneeEtude,anneeScolaire
}
API.put(`/student/${params.id}`, data)
    }
  
        
    
     return(
        <div>
                <h3>Remplissez les champs SVP {JSON.stringify(params)} ici</h3>
                <FormControl>
                    <Input type='String' name='matricule' value={matricule} onChange={(e)=> setMatricule(e.target.value)}></Input>
                    <Input type='String' name='nom' value={nom}  onChange={(e)=> setNom(e.target.value)}></Input>
                    <Input type='String' name='prenom' value={prenom} onChange={(e)=> setPrenom(e.target.value)}></Input>
                    <Input type='Date' name='dateNaissance' value={dateNaissance}  onChange={(e)=> setDateNaissance(e.target.value)}></Input>
                    <Input type='String' name='lieuNaissance' value={lieuNaissance}  onChange={(e)=> setLieuNaissance(e.target.value)}></Input>
                    <Input type='String' name='nationality' value={nationality} onChange={(e)=> setNationality(e.target.value)}></Input>
                    <Input type='Date' name='firstInscription' value={firstInscription}  onChange={(e)=> setFirstInscription(e.target.value)}></Input>
                    <Input type='Date' name='bac' value={bac}  onChange={(e)=> setBac(e.target.value)}></Input>
                    <Input type='String' name='gendre' value={gendre}  onChange={(e)=> setGendre(e.target.value)}></Input>
                    {/*<Input type='String' name='type' onChange={(e)=> setType(e.target.value)}></Input>*/}
                    <Input type='Number' name='anneeEtude' value={anneeEtude}  onChange={(e)=> setAnneeEtude(e.target.value)}></Input>                
                    <Input type='String' name='anneeScolaire' value={anneeScolaire}  onChange={(e)=> setAnneeScolaire(e.target.value)}></Input>
                    <Button onClick={miseAjour} >Mettre à jour</Button>
                                      
                </FormControl>
            </div>
        )

}
export default Modifier;
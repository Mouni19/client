import React, {useEffect, useState,useRef}from 'react';
import {Button,Input,FormControl} from "@material-ui/core";
import API from 'appi/api';
import { useParams } from 'react-router-dom';


const ModifierModdulle=()=>{
        const [code_moddulle, setCode_moddulle] = useState("");
        const [designation_moddulle, setDesignation_moddulle] = useState("");
        const [coefficient, setCoefficient] = useState("");
        const [nombre_epreuves, setNombre_epreuves] = useState('');
        const [année, setAnnée] = useState('');
        const [afficheEpreuve, setAfficheEpreuve] = useState(false);
        const [modulle_epreuve,setModulle_epreuve]= useState("");
        const [code_epreuve,setCode_epreuve]= useState("");
        const [date_epreuve,setDate_epreuve]= useState("");
        const [année_epreuve,setAnnée_epreuve]= useState("");
        const [nature_epreuve,setNature_epreuve]= useState("");
      
     const params = useParams();

useEffect(()=>{
    getModdulleDetails();
},[]) 
const getModdulleDetails = async()=>{
    console.log(params);
    let result = await fetch(`http://localhost:1337/moddulle/${params.id}`)
     
    result = await result.json();
    console.log(result);
   
    setCode_moddulle(result.moddulle.code_moddulle);
    setDesignation_moddulle(result.moddulle.designation_moddulle);
    setCoefficient(result.moddulle.coefficient);
    setNombre_epreuves(result.moddulle.nombre_epreuves);
    setAnnée(result.moddulle.année);
       
        } 
   
    const miseAjour=()=>{
const data = {
   code_moddulle,designation_moddulle,coefficient,nombre_epreuves,année   
}
API.put(`/moddulle/${params.id}`, data)
    }
    const ajouterEpreuve=()=>{
setAfficheEpreuve(true);
    }
    const enregistrerEpreuve=()=>{
        const data = {
            code_epreuve,date_epreuve,année_epreuve,nature_epreuve
         }
         API.put(`/modulle/${params.id}`, data)
    }
      if(!afficheEpreuve){   
     return(
        <div>
                <h3>Remplissez les champs SVP {JSON.stringify(params)} ici</h3>
                <FormControl>
                    <Input type='String' name='code_moddulle' value={code_moddulle} onChange={(e)=> setCode_moddulle(e.target.value)}></Input>
                    <Input type='String' name='designation_moddulle' value={designation_moddulle}  onChange={(e)=> setDesignation_moddulle(e.target.value)}></Input>
                    <Input type='String' name='coefficient' value={coefficient}  onChange={(e)=> setCoefficient(e.target.value)}></Input>
                    <Input type='String' name='nombre_epreuves' value={nombre_epreuves} onChange={(e)=> setNombre_epreuves(e.target.value)}></Input>
                    <Input type='Number' name='année' value={année}  onChange={(e)=> setAnnée(e.target.value)}></Input>
                    <Button onClick={miseAjour} >Mettre à jour</Button>
                    <Button onClick={ajouterEpreuve}>Ajouter épreuve</Button> 
                                                        
                </FormControl>
            </div>
        )}else{
            return(
                <div>
                <h3>Remplissez les champs SVP {JSON.stringify(params)} ici</h3>
                <FormControl>
                    <Input type='String' name='code_moddulle' value={code_moddulle} onChange={(e)=> setCode_moddulle(e.target.value)}></Input>
                    <Input type='String' name='designation_moddulle' value={designation_moddulle}  onChange={(e)=> setDesignation_moddulle(e.target.value)}></Input>
                    <Input type='String' name='coefficient' value={coefficient}  onChange={(e)=> setCoefficient(e.target.value)}></Input>
                    <Input type='String' name='nombre_epreuves' value={nombre_epreuves} onChange={(e)=> setNombre_epreuves(e.target.value)}></Input>
                    <Input type='Number' name='année' value={année}  onChange={(e)=> setAnnée(e.target.value)}></Input>
                    <Input type='String' name='modulle_epreuve' placeholder='modulle_epreuve' onChange={(e)=> setModulle_epreuve(e.target.value)}></Input>
                    <Input type='String' name='code_epreuve' placeholder='code_epreuve' onChange={(e)=> setCode_epreuve(e.target.value)}></Input>
                    <Input type='Date'   name='date_epreuve' placeholder='date_epreuve' onChange={(e)=> setDate_epreuve(e.target.value)}></Input>
                    <Input type='Number' name='année_epreuve' onChange={(e)=> setAnnée_epreuve(e.target.value)}></Input>
                    <Input type='String' name='nature_epreuves' placeholder='nature_epreuve' onChange={(e)=> setNature_epreuve(e.target.value)}></Input>
                             
                    <Button onClick={enregistrerEpreuve}>Enregistrer épreuve</Button> 
                </FormControl>
                    </div>
            )
        }

}
export default ModifierModdulle;
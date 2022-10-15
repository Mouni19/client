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
        const [epreuves, setEpreuves] = useState([]);
      
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
    setEpreuves(result.moddulle.epreuves);
        } 
   
    const miseAjour=()=>{
const data = {
   code_moddulle,designation_moddulle,coefficient,nombre_epreuves,année,epreuves    
}
API.put(`/moddulle/${params.id}`, data)
    }
         
     return(
        <div>
                <h3>Remplissez les champs SVP {JSON.stringify(params)} ici</h3>
                <FormControl>
                    <Input type='String' name='code_moddulle' value={code_moddulle} onChange={(e)=> setCode_moddulle(e.target.value)}></Input>
                    <Input type='String' name='designation_moddulle' value={designation_moddulle}  onChange={(e)=> setDesignation_moddulle(e.target.value)}></Input>
                    <Input type='String' name='coefficient' value={coefficient}  onChange={(e)=> setCoefficient(e.target.value)}></Input>
                    <Input type='String' name='nombre_epreuves' value={nombre_epreuves} onChange={(e)=> setNombre_epreuves(e.target.value)}></Input>
                    <Input type='Number' name='année' value={année}  onChange={(e)=> setAnnée(e.target.value)}></Input>
                    <Input type='String' name='epreuves' value={epreuves}  onChange={(e)=> setEpreuves(e.target.value)}></Input>
                   
                    <Button onClick={miseAjour} >Mettre à jour</Button>
                                      
                </FormControl>
            </div>
        )

}
export default ModifierModdulle;
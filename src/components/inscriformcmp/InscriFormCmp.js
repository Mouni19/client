import React from 'react';
import {Input,Button,FormControl} from "@material-ui/core";
import {useState} from 'react';
import 'components/inscriformcmp/InscriFormCmp.css';
import API from 'appi/api';

const InscriForm =() =>{

    const [name, settName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [confirmPassWord, setConfirmPassword] = useState('');

    const send = () => {
        const data = {
            name,email,password
        }
    
        API.post('/register', data)
            .then(res => {
                alert('Ok')
           
            }).catch(err => {
            alert('ERROR')
        })
    }

    return (
        <div className='inscriContainer'>
            <h3>Nouvel utilisateur ?</h3>
            <h3>Créez votre compte SVP</h3>
            <br/>
            <FormControl className='inscriform'>
           <Input type='String' name='name' placeholder='votre nom SVP?' onChange={(e) => settName(e.target.value)}></Input>
            <Input type='String' name='email' placeholder='votre email SVP?' onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type='String' name='password' placeholder='entrez un mot de passe SVP' onChange={(e) => setPassWord(e.target.value)}></Input>
            <Input type='String' name='confirmpassword' placeholder='confirmez le mot de passe SVP'  onChange={(e) => setConfirmPassword(e.target.value)}></Input>
            <Button onClick={send}>Envoyer</Button>
        </FormControl>
        
        </div>
         );
        }
        
        export default InscriForm;

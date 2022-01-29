import React from 'react';
import {Input,Button,FormControl} from "@material-ui/core";
import {useState} from 'react';
import 'components/identformcmp/IdentFormCmp.css';
import API from 'appi/api';
import {useNavigate} from 'react-router-dom'

const IdentForm = () =>{

   const history = useNavigate();
   const[email,setEmail] = useState('');
   const[password,setPassWord] = useState('');

   const navagate = (path) => {
   // history.push(path)
   history(path);
    }
    /*useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            try {
                
               // const u = JSON.parse(user).name
                navagate('/contact')
            } catch (e) {
            }
        }else{
            navagate('/chang')
        }
    }, [])*/

   const send1 = () => {
       
    API.post('/login', {email,password})
    .then((res) => {
          console.log(res);
         // const[loginStatus,setLoginStatus] = useState(false);
          //alert(res.data.msg);
          if (!(res.data.success)) {
            //  setLoginStatus(false);
          //  alert(res.data.msg)
            console.log("raki ghalta khlas");
            navagate('/chang');
        } else {
           // localStorage.setItem('user', JSON.stringify(res.data.user));
          // setLoginStatus(true)
          // alert(res.data.msg);
            navagate('/contact');
            }
        }  )
    /*.catch(err => {
        console.log(err);
        alert('ERROR');
            })*/
}
 return (
<div className='ident_container'>
    <h3>Déja inscris?</h3>
    <h3>Identifiez-vous SVP</h3>
    <br/>
   <FormControl className='form_ident'>
        <Input type='String' name='email' placeholder="Votre mail" onChange={(e) => setEmail(e.target.value)} > </Input>
        <Input type='password' name='password' placeholder="mot de passe" onChange={(e) => setPassWord(e.target.value)} > </Input>
        <Button onClick={send1}>Envoyer</Button>
 </FormControl>

</div>
 );
}

export default IdentForm;
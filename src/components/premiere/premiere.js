import React from 'react';
import {Button} from "@material-ui/core";
//import {useState,useEffect} from 'react';
import "components/premiere/premiere.css";
//import StudentComponent from 'components/student_component/studentComponent';
//import "screen/contact/bien";
import { Link ,useNavigate} from 'react-router-dom';


const PremierePage = () =>{
    
    /*let history = useHistory();

    function handleClick() {
      history.push("/Chang");
    }*/
    const history = useNavigate();

    /*const u = localStorage.getItem('user')
    const user = JSON.parse(u)*/

   
    const logout1 = () => {
        localStorage.setItem('user', {});
        navagate('/login');
    };
    const navagate = (path) => {
        history(path);
    };
    return(
<div className='fenetre_premiere'>
    <div className='entete'>
    <h3>Bienvenue sur votre compte {/*user.firstname} {user.lastname*/}</h3>
    <h3>Choisissez une option</h3>
    <br/>
    </div>

    <Link to="/studentManage"><Button>Gestion des étudiants</Button></Link>
    <Link to = "/moddulleManage"><Button>Gestion des modules</Button></Link>
    <Link to = "/epreuveManage"><Button>Gestion des épreuves</Button></Link>
    <Button>Affichage et impression des sorties</Button>
    <Button onClick={logout1}>Logout</Button>
</div>
 );
}
   

export default PremierePage;
import React from 'react';
import IdentForm from 'components/identformcmp/IdentFormCmp';
import InscriForm from 'components/inscriformcmp/InscriFormCmp';
import './login.css';

const Login = () =>{
        return(
            <div className='login_container'>
        <div className="identification">
            <IdentForm/>
        </div>
        <div className="inscription">
            <InscriForm/>
        </div>
    </div>
        );
    }


export default Login;
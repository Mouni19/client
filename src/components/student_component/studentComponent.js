import React from 'React';
import {Button,Imput,FormControl} from '@material-ui/core';
import 'components/student_component/studentComponent.css';
import {ExcelRenderer, OutTable} from 'react-excel-renderer';

const StudentComponent = () =>{

    const disp1 = ()=>{
        fileHandler = (event) => {
            let fileObj = event.target.files[0];
            
            //just pass the fileObj as parameter
            ExcelRenderer(fileObj, (err, resp) => {
              if(err){
                console.log(err);            
              }
              else{
                this.setState({
                  cols: resp.cols,
                  rows: resp.rows
                });
              }
            });               
            
            }
    }

    return(
        <div className='student_framework'>
            <h3>Gestion des étudiants</h3>
            <br/>
            <Input type = 'number' name= 'year' placeholder = 'année' onChange = {(e)=> setYear(e.target.value)}></Input>
            <Input type = 'Number' name='schoolYear' placeholder = 'Année scolaire' onchange = {(e) => setSchoolYear(e.target.value)}></Input>
            <Input type='String' name ='rechercher' placeholder = 'tapper votre recherche' onchange = {(e)=>setRechercher(e.target.value)}></Input>
            <Button onClick={displ}>Afficher tout</Button>
            <Button onClick={copy}>Inserer depuis excel</Button>
            <Button onClick={insert}>Inserer manuellement</Button>

        </div>

    );

}

export default StudentComponent;
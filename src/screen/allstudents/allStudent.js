import React from 'react';
import axios from 'axios';
import API from 'appi/api';
import { useEffect,useState} from 'react';
import ListAllStudents from './listAllStudents';

const AllStudents = (req,res)=>{
    const [students,setStudents]= useState([]);

    useEffect(async()=>{
        await (axios.get(`http://localhost:1337/student/`)).then(
            (res)=>{setStudents(res.data);
              console.log(students);
                            
          }).catch((err)=>{console.log(err)});

    },[]);

        return(
            <div className='tableau_all_etu'>
            <ul>  
              {
                 students.map(student =><ListAllStudents key = {student.id} item={ student } /> 
                 )
                 }
                 </ul>  
                 
          </div>
    );

}
export default AllStudents;
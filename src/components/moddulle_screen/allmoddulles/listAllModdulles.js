import React from 'react';
import {Button} from "@material-ui/core";
const ListAllModdulles = ({item})=>{
   
    return(
<div className="all_moddulles">
<div>{item.code_moddulle}</div>
<div>{item.designation_moddulle}</div>
</div>
    );
}
export default ListAllModdulles;
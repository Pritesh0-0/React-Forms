import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";

function Details(){

 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     fullName:'',
     age:'',
     address:'',
     salary:'',
     marital_status: false
    }
 );
 
 const handleChange=(evnt)=>{  
    let { name, value, checked, type } = evnt.target;
    
            value = type === "checkbox" ? checked : value;
        
            // name, Address, age
            setformInputData({ ...formInputData, [name]: value });
 }
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {fullName:'', address:'', salary:''}
      setformInputData(emptyInput)
     }
 }  

 return(
     <React.Fragment>
     <div className="container">
     <div className="row">
         <div className="col-sm-8">
         <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
         <Table tableData={tableData}/>
         </div>
         <div className="col-sm-4">

         </div>
     </div>
    </div>
     </React.Fragment>
 );
}
export default Details;
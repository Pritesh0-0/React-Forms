import React from "react";

function FormInput({handleChange, formInputData, handleSubmit}){
    return(
    
        <div className="form-row row">
          <div className="col">
           Name: <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
          </div>
          <br />
          <div className="col">
            Age: <input type="age" onChange={handleChange} value={formInputData.age} name="age" className="form-control" placeholder="Enter Age" />
          </div>
          <br />
          <div className="col">
            Address: <input type="address" onChange={handleChange} value={formInputData.address} name="address" className="form-control" placeholder="Full Address" />
          </div>
          <br />
          <div className="col">
            Salary: <input type="text" onChange={handleChange} value={formInputData.salary} name="salary" className="form-control" placeholder="Salary" />
          </div>
          <br />
          <div>
          Marital Status: <input
            type="checkbox"
            onChange={handleChange}
            name="marital_state"
            value={formInputData.marital_state}
          />
          <br />
          </div>
          <div className="col">
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
     
      
    )
    }
    
    export default FormInput;
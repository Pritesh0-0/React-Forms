import React from "react";

function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Marital Status</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.fullName}</td>
                            <td>{data.age}</td>
                            <td>{data.address}</td>
                            <td>{data.salary}</td>
                            <td>{data.marital_status}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;
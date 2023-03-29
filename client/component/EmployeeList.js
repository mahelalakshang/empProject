
import React,{Component} from "react";
import AuthForm from "./AuthForm";
import DeleteMutation from "../mutations/deleteEmployee";
import {graphql} from 'react-apollo'
import query from '../queries/EmployeeList'
import {hashHistory} from 'react-router'
import {Link} from 'react-router'

const EmployeeList = (props) => {

    console.log(props)

    const deleteEmp=(e)=>{
        props.mutate({
            variables:{id:e},
            refetchQueries:[{query:query}]
        }).catch(res=>{
            const errors=res.graphQLErrors.map(error=>error.message)
            console.log(errors)
        })
    }

  return (
    <div>
        <h4 style={{textAlign:'center'}}>EmployeeList</h4>    
        <button style={{backgroundColor:"#3B71CA",color:"white",padding:'4px',margin:'2px',border:'none',borderRadius:'2px'}}><Link style={{color:'white'}} to={`/addEmployee`}>Add Employee</Link></button>    
    <table >
        <tr>
          <th>Employee FirstName</th>
          <th>Employee LasttName</th>
          <th>Employee Email Id</th>
          <th>Actions</th>
        </tr>
        {
         props.data.employees && props.data.employees.map((emp)=>{
            return(
              <tr key={emp.id}>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>
                  <button style={{backgroundColor:"#0000ff",color:"white",padding:'4px',margin:'2px',border:'none',borderRadius:'2px'}}><Link style={{color:'white'}} to={`update/${emp.id}`}>Update</Link></button>
                  <button onClick={(e)=>deleteEmp(emp.id)} style={{backgroundColor:"#ff0000",color:"white",padding:'4px',margin:'2px',border:'none',borderRadius:'2px'}}>Delete</button>
                  <button style={{backgroundColor:"#0000ff",color:"white",padding:'4px',margin:'2px',border:'none',borderRadius:'2px'}}> <Link style={{color:'white'}} to={`employee/${emp.id}`}>View</Link></button>
                </td>
              </tr>
            )
          })
        }

    </table>
    </div>
  )
}

export default graphql(query)(
    graphql(DeleteMutation)(EmployeeList)
)


import React from 'react'
import query from '../queries/GetEmployee'
import {graphql} from 'react-apollo'

const ViewEmployee = (props) => {
    // console.log(props.params.id)
    console.log(props.data)
    console.log(props.data)
  return (
    <div style={{marginTop:'30px'}}>
        
         <div style={{display:'flex'}}>

         <div style={{width:'50%'}}>
         </div>   

         <div style={{width:'50%', border:'1px solid #D3D3D3'}} >
         <h4 style={{textAlign:'center'}}>View Employee Details</h4>
          <div style={{margin:'20px'}}>Employee First Name:- {props.data.employee&&props.data.employee.firstName} </div>
          <div style={{margin:'20px'}}>Employee Last Name:- {props.data.employee&&props.data.employee.lastName} </div>
          <div style={{margin:'20px'}}>Employee Email :- {props.data.employee&&props.data.employee.email} </div>
         </div>

         </div>
    </div>
  )
}

export default graphql(query,{
    options:(props)=>{return{variables:{id:props.params.id}}}
}) (ViewEmployee)



// export default graphql(query) (ViewEmployee)
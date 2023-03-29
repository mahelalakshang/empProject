import React, { Component } from 'react'
import {hashHistory} from 'react-router'
import {Link} from 'react-router'
import mutation from "../mutations/updateEmployee";
import {graphql} from 'react-apollo'
import query from '../queries/GetEmployee'



class UpdateEmployee extends Component{

    constructor(props){
        super(props)

        this.state={fn:'', ln:'', email:''}
    }

 
    

    onSubmitOne(event){
        
        event.preventDefault()
        this.props.mutate({
            variables:{id:this.props.params.id,fn:this.state.fn,ln:this.state.ln,email:this.state.email},
            refetchQueries:[{query:query}]
        }).then(res=>{
            hashHistory.push('/dashboard')
            location.reload()
        }).catch(res=>{
            const errors=res.graphQLErrors.map(error=>error.message)
            console.log(errors)
        })

    }

    getData(){
       
        console.log(this.props.data.employee && this.props.data.employee.firstName)
        this.setState({fn:this.props.data.employee&&this.props.data.employee.firstName})
        this.setState({ln:this.props.data.employee&&this.props.data.employee.lastName})
        this.setState({email:this.props.data.employee&&this.props.data.employee.email})     
       
    }

    componentDidMount() {
        setTimeout(()=>{
            this.getData()
        },2000)
       
      }
    

  

render(){
       
  return (
    <div style={{marginTop:'30px'}}>
        {/* {this.showDetails()} */}
     <div style={{display:'flex'}}>

      <div style={{width:'50%'}}>
      </div>   

      <div style={{width:'50%', border:'1px solid #D3D3D3', display:'block'}} >
       <h4 style={{textAlign:'center'}}>Update Employee</h4>
       <span onClick={this.checkClick} style={{margin:'20px'}}>First Name</span><br></br>
       <input  placeholder="first name" value={this.state.fn} onChange={e=>this.setState({fn:e.target.value})}  style={{margin:'20px',width:'90%'}} type="text" ></input><br></br>
       
       <span  style={{margin:'20px'}}>Last Name</span><br></br>
       <input placeholder="last name" value={this.state.ln} onChange={e=>this.setState({ln:e.target.value})}  style={{margin:'20px',width:'90%'}} type="text" ></input><br></br>

       <span  style={{margin:'20px'}}>Email Id</span><br></br>
       <input placeholder="email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}  style={{margin:'20px',width:'90%'}} type="text" ></input><br></br>

       <div style={{margin:'20px'}}>
       <button onClick={this.onSubmitOne.bind(this)} style={{margin:'20px',backgroundColor:"green",color:"white",padding:'4px',margin:'2px',border:'none',borderRadius:'2px'}}>Save</button>
       <button style={{margin:'20px',backgroundColor:"red",color:"white",padding:'4px',margin:'2px',border:'none',borderRadius:'2px'}}> <Link style={{color:'white'}} to="/dashboard">Cancel</Link></button>

       </div>
      </div>
     </div>
    </div>
  )
}
}

export default graphql(query,{
    options:(props)=>{return{variables:{id:props.params.id}}}
}) (
    graphql(mutation)(UpdateEmployee)
)
import React,{Component} from "react";
import {graphql} from 'react-apollo'
import {Link} from 'react-router'
import query from '../queries/CurrentUser'
import mutation from '../mutations/Logout'



class Header extends Component{


    onLogoutClick(){
      this.props.mutate({
        refetchQueries:[{query:query}]
      })
    }

    renderButton(){
        const {loading,user}=this.props.data
        if (user){
          return<div> <li>
              <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
            </li> 
            <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </div>
        }
        else{
          return (
            <div>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
            </div>
          )
        }

    }

    render(){
        console.log(this.props.data);

        return(
           <nav>
             <div className="nav-wrapper">
              <Link to="/dashboard" className="brand-logo left">
                Home
              </Link>
           
              
              <ul className="right">
                 {this.renderButton()}
              </ul>
             </div>
           </nav> 
        )
    }

}

export default graphql(mutation)(
 graphql(query)(Header) 
)
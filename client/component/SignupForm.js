import React,{Component} from "react";
import AuthForm from "./AuthForm";
import SignupMutation from "../mutations/Signup";
import {graphql} from 'react-apollo'
import query from '../queries/CurrentUser'
import {hashHistory} from 'react-router'

class SignupForm extends Component{

    constructor(props){
        super(props)

        this.state={errors:[]}
    }

    componentWillUpdate(nextProps){
       
        // console.log("aa",this.props,"bb", nextProps)
        if(!this.props.data.user && nextProps.data.user){
            hashHistory.push('/dashboard')
        }
    }

    onSubmit({email,password}){
        this.props.mutate({
            variables:{email,password},
            refetchQueries:[{query:query}]
        }).catch(res=>{
            const errors=res.graphQLErrors.map(error=>error.message)
            this.setState({errors})
            console.log(errors)
        })
    }

    render(){
        return(
            <div>
                <h3>Signup</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}></AuthForm>
            </div>
        )
    }

}

export default graphql(query)(
 graphql(SignupMutation)(SignupForm)
)

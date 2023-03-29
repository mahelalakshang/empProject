import React, { Component } from 'react'
import Header from './Header'
import {hashHistory} from 'react-router'


class App extends Component{

  // useEffect(()=>{
  //   hashHistory.push('/dashboard')
  // },[])

  componentWillMount(){
    hashHistory.push('/dashboard')
  }

  render(){
    return (
    
      <div className='container'>
           <Header></Header>
  
          {this.props.children}
          
      </div>
    )
  }


}

export default App
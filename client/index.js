import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient,{createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './component/App';
import LoginForm from './component/LoginForm';
import SignupForm from './component/SignupForm';
import Dashboard from './component/Dashboard';
import requireAuth from './component/requireAuth';
import ViewEmployee from './component/ViewEmployee';
import AddEmployee from './component/AddEmployee';
import UpdateEmployee from './component/UpdateEmployee';

const networkInterface=createNetworkInterface({
  uri:'/graphql',
  opts:{
    credentials:'same-origin'
  }
})

const client=new ApolloClient({
  networkInterface,
  dataIdFromObject: o=>o.id
})


const Root = () => {
  return (
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
              {/* <IndexRoute component={SongList} /> */}
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/signup" component={SignupForm}></Route>
              <Route path="/dashboard" component={requireAuth(Dashboard)}></Route>
              <Route path="/employee/:id" component={requireAuth(ViewEmployee)}></Route>
              <Route path="/addEmployee" component={requireAuth(AddEmployee)}></Route>
              <Route path="/update/:id" component={requireAuth(UpdateEmployee)}></Route>
          </Route>
       </Router>
    </ApolloProvider>

  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));

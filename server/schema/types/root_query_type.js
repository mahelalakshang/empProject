const graphql = require('graphql');
const { GraphQLObjectType , GraphQLID, GraphQLList, GraphQLNonNull} = graphql;
const UserType=require('./user_type')
const EmployeeType=require('./employee_type')
const mongoose = require('mongoose');
const Eemplo = mongoose.model('employee');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    user:{
      type:UserType,
      resolve(parentValue, args, req){
        return req.user
      }
     },
     employees:{
      type: new GraphQLList(EmployeeType),
      resolve(){
        return Eemplo.find({});
      }
     },
     employee: {
      type: EmployeeType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Eemplo.findById(id);
      }
    },
  }

});

module.exports = RootQueryType;

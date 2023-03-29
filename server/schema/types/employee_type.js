const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString , GraphQLID} = graphql;

const EmployeeType = new GraphQLObjectType({
  name: 'EmployeeType',
  fields:{
    id:{type:GraphQLID},
    firstName:{type:GraphQLString},
    lastName:{type:GraphQLString},
    email:{type:GraphQLString}
  }
});

module.exports = EmployeeType;
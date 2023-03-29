const graphql = require('graphql');
const { GraphQLSchema, GraphQLString,GraphQLObjectType, GraphQLID } = graphql;
const UserType =require('./types/user_type')
const AuthServie =require('../services/auth')
const EmployeeType=require('./types/employee_type')
const mongoose = require('mongoose');
const Eemployee = mongoose.model('employee');


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup:{
            type: UserType,
            args:{
                email:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve(parentValue,{email,password},request){
               return AuthServie.signup({ email, password, req:request})
            }
        },
        logout:{
            type: UserType,
            resolve(parentValue,args,request){
                const {user}=request
                request.logout()
                return user
             }
        },
        login:{
            type: UserType,
            args:{
                email:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve(parentValue,{email,password},request){
               return AuthServie.login({ email, password, req:request})
            }
        },
        addEmployee:{
            type: EmployeeType,
            args:{
                firstName:{type:GraphQLString},
                lastName:{type:GraphQLString},
                email:{type:GraphQLString}
            },
            resolve(parentValue,{ firstName, lastName, email },request){
                return (new Eemployee({ firstName, lastName, email })).save()
            }  
        },
        updateEmployee:{
            type: EmployeeType,
            args:{
                id:{type: GraphQLID},
                firstName:{type:GraphQLString},
                lastName:{type:GraphQLString},
                email:{type:GraphQLString}
            },
            resolve(parentValue, {id, firstName, lastName, email }) {
              return Eemployee.findByIdAndUpdate(id,{firstName, lastName, email});
            }
        },
        deleteEmployee:{
            type: EmployeeType,
            args:{
                id:{type: GraphQLID},
            },
            resolve(parentValue, {id}) {
              return Eemployee.findByIdAndRemove(id);
            }
        },
    }
});


module.exports = mutation;





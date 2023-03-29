import gql from 'graphql-tag'


export default gql`

query GetEmp($id:ID!){
  employee(id:$id){
    id
    email
    firstName
    lastName
  }
}

`
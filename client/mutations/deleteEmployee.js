import gql from "graphql-tag";

export default gql`
mutation DeleteEmployee($id:ID){
  deleteEmployee(id:$id){
    id
    email
  }
}

`
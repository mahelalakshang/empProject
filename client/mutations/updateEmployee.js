import gql from "graphql-tag";

export default gql`
mutation UpdateEmployee($id:ID,$fn:String,$ln:String,$email:String){
  updateEmployee(firstName:$fn,lastName:$ln,email:$email,id:$id){
    id

  }
}


`
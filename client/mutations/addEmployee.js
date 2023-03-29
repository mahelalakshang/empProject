import gql from "graphql-tag";

export default gql`
mutation AddEmployee($fn:String,$ln:String,$email:String){
  addEmployee(firstName:$fn,lastName:$ln,email:$email){
    id

  }
}

`
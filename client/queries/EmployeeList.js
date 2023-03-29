import gql from 'graphql-tag'


export default gql`

{
    employees{
     id
     email
     lastName
     firstName
    }
}

`
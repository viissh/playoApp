import { gql } from "@apollo/client";

const GET_ONE_USER = gql`
  query ExampleQuery($email: String!) {
    getOneUser(email: $email) {
      id
      name
      email
      password
    }
  }
`;



export { GET_ONE_USER };

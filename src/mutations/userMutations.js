import {gql} from '@apollo/client';

const ADD_USER = gql`
mutation Mutation($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      code
      success
      message
      user {
        id
        name
        email
        password
      }
    }
  }
  `;

  const DO_LOGIN = gql`
  mutation Query($email: String!, $password: String!) {
    doLogin(email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;

export {ADD_USER, DO_LOGIN}
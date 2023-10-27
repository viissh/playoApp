import { gql } from "graphql-tag";

export const typeDefs = gql`
  
  scalar String

  type Query {
    hello: String!
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): AddUserResponse!
    doLogin(email: String!, password: String!): User!
  }

  type LoginUserResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    token: String
  }

  type AddUserResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    user: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;

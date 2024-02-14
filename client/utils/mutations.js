import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $username: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, username: $username) {
      token
      user {
        _id
        firstName
        lastName
        email
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $content: String!, $userId: ID!) {
    addPost(title: $title, content: $content, author: $userId) {
      _id
      title
      content
      author {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($text: String!, $postId: ID!, $userId: ID!) {
    addComment(text: $text, postId: $postId, author: $userId) {
      _id
      text
      createdAt
      author {
        _id
        username
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      _id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

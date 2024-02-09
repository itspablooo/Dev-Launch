import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
      email
      
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      title
      content
      author {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query post($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      content
      author {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments {
    comments {
      _id
      text
      author {
        _id
        firstName
        lastName
        email
      }
      post {
        _id
        title
        content
      }
    }
  }
`;
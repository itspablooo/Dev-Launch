const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        username: String
    },
    
    type Post {
        _id: ID
        title: String
        content: String
        author: User
        comments: [Comment]
    },

    type Comment {
        _id: ID
        text: String
        author: User
        post: Post
    },

    type Query {
        users: [User]
        posts: [Post]
        comments: [Comment]
    }
    type Mutation { 
        addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): User
        deleteUser(id: ID!): User

        addPost(title: String!, content: String!, author: ID!): Post
        deletePost(id: ID!): Post
        
        addComment(text: String!, postId: ID!, author: ID!): Comment
        deleteComment(id: ID!): Comment
    }
`;

module.exports = typeDefs;
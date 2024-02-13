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
    type mutation { 
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): User

        addPost(title: String!, content: String!, author: userId!): Post

        addComment(text: String!, postId: ID!, author: userId! ): Comment
    }
`;

module.exports = typeDefs;
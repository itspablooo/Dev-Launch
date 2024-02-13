const { User, Post, Comment } = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('posts');
        },
        posts: async () => {
            return await Post.find({}).populate('comments');
        }, 
        comments: async () => {
            return await Comment.find({});
        }
    },
    Mutation: {
        addUser: async (parent, {firstName, lastName, email, username}) => {
            const user = await User.create({firstName, lastName, email, username});
            return user;
        },
        addPost: async (parent, {author, title, content }) => {
            const post = await Post.create({author, title, content});
            return post;
        },
        addComment: async (parent, { text, postId, author }) => {
            const comment = await Comment.create({text, postId, author});
            return comment;
        }
    }
};
  
module.exports = resolvers;
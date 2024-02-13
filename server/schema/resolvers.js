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
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        addPost: async (parent, args) => {
            const post = await Post.create(args);
            return post;
        },
        addComment: async (parent, args) => {
            const comment = await Comment.create(args);
            return comment;
        }
    }
};
  
module.exports = resolvers;
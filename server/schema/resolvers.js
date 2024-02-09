const { User, Post, Comment } = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        posts: async () => {
            return await Post.find({}).populate('comments');
        }, 
        comments: async () => {
            return await Comment.find({});
        }
    }
};
  
  module.exports = resolvers;
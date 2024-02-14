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
        addUser: async (_, { firstName, lastName, email, username, password }) => {
            const user = await User.create({ firstName, lastName, email, username, password });
            return user;
        },
        deleteUser: async (_, { id }) => {
            const user = await User.findByIdAndDelete(id);
            if (!user) throw new Error("User not found");
            // Also delete associated posts and comments if necessary
            return user;
        },

        addPost: async (_, { title, content, author }) => {
            const user = await User.findById(author);
            if (!user) throw new Error("Author not found");
            const post = await Post.create({ title, content, author: user._id });
            return post;
        },
        deletePost: async (_, { id }) => {
            const post = await Post.findByIdAndDelete(id);
            if (!post) throw new Error("Post not found");
            // Also delete associated comments if necessary
            return post;
        },

        addComment: async (_, { text, postId, author }) => {
            const user = await User.findById(author);
            if (!user) throw new Error("Author not found");
            const post = await Post.findById(postId);
            if (!post) throw new Error("Post not found");
            const comment = await Comment.create({ text, postId, author: user._id });
            return comment;
        },
        deleteComment: async (_, { id }) => {
            const comment = await Comment.findByIdAndDelete(id);
            if (!comment) throw new Error("Comment not found");
            return comment;
        }
    }
};
  
module.exports = resolvers;
const db = require('../config/connection');
const { User, Post, Comment } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
// const postData = require('./postData.json');
// const commentData = require('./commentData.json');

db.once('open', async () => {
    try {
      await cleanDB('User', 'users');
      await User.create(userData);

      // await cleanDB('Post', 'posts');
      // await Post.create(postData);

      // await cleanDB('Comment', 'comments');
      // await Comment.create(commentData);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });

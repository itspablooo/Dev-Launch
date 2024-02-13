const db = require('../config/connection');
const { User, Post, Comment } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


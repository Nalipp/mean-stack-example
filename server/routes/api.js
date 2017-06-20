const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const Post = require('../models/post');

const db = 'mongodb://localhost:27017/code-post';

mongoose.Promise = global.Promise;

mongoose.connect(db, function(err) {
    if (err) console.log('connection error')
  });

router.get('/posts', function(req, res) {
  console.log('requesting post')                 
  Post.find({})
    .exec(function(err, posts) {
      if (err) {
        console.log('error getting the posts')
      } else {
        console.log(posts); 
        res.json(posts);
      }
    })
  });

router.get('/details/:id', function(req, res) {
  console.log('requesting post details')                 
  Post.findById(req.params.id)
    .exec(function(err, post) {
      if (err) {
        console.log('error getting the post')
      } else {
        res.json(post);
      }
    })
  });

module.exports = router;


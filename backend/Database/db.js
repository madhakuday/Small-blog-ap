import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017/blogappdata', (err) => {
mongoose.connect(
  'mongodb+srv://udaymadhak:1234@cluster0.xt9jp.mongodb.net/blogappdata?retryWrites=true&w=majority',

  (err) => {
    if (err) {
      console.log('an error in db ', err);
    }
    console.log('database done');
  }
);

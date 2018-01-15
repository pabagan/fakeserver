require('dotenv').config()
const config = require('./config');

const authors = ["Pepete", "Juanete", "Santiaguillo"];

const createPost = (id, title, author) => {
  return {
    id: id,
    title: title,
    author: author
  }
};

const createComment = (id, body, postId) => {
  return {
    id: id,
    body: body,
    postId: postId
  }
};

const createProfile = (name) => {
  return {
    name: name,
  }
};


module.exports = () => {
  const totalPosts = config.postsNumber;
  const commentsPerPost = config.commentsPerPost;
  var data = {
    posts: [],
    comments: [],
    profiles: [],
  };

  // Posts
  for (let i = 0; i < totalPosts; i++) {
    data.posts.push(createPost(i, 'Title ' + i, authors[i % authors.length]));
  }

  // Comments
  for (let i = 0; i < totalPosts * commentsPerPost; i++) {
    data.comments.push(createComment(i, 'Comments body ' + i, i % totalPosts));
  }

  // profiles
  for (let i = 0; i < authors.length; i++) {
    data.profiles.push(createProfile(authors[i]));
  }

  console.log(data);

  return data;
};

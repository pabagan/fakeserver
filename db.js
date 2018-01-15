require('dotenv').config();
const config = require('./config');
const faker = require('faker');
faker.locale = "es";


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
  let data = {
    posts: [],
    comments: [],
    profiles: [],
  };

  // Posts
  for (let i = 0; i < totalPosts; i++) {
    let postId = i;
    let postBody = faker.lorem.sentence();
    let authorName = authors[i % authors.length];
    data.posts.push(createPost(postId, postBody, authorName));
  }

  // Comments
  for (let i = 0; i < totalPosts * commentsPerPost; i++) {
    let commentId = i;
    let commentBody = faker.lorem.paragraph();
    let postId = i % totalPosts;

    data.comments.push(createComment(commentId, commentBody, postId));
  }

  // profiles
  for (let i = 0; i < authors.length; i++) {
    let authorId = authors[i];
    data.profiles.push(createProfile(authorId));
  }

  //console.log(data);
  //console.log(faker.helpers.createCard());

  return data;
};

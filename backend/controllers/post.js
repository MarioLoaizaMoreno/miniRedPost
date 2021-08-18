const Post = require("../models/post");
const User = require("../models/user");

const registerPost = async (req, res) => {
  if (!req.body.text || !req.body.hashtag)
    return res.status(401).send({ message: "process failed: Incomplete data" });

  const post = new Post({
    userId: req.user._id,
    text: req.body.text,
    hashtag: req.body.hashtag,
    status: true,
  });
  const result = await post.save();
  if (!result)
    return res.status(200).send({ message: "post create", data: post });
  return res.status(401).send({ message: "Fail to register post" });
};

const listPost = async (req, res) => {
    const posts = await Post.find({userId: req.user._id}).populate('userId');
    if(posts.length === 0) return res.status(400).send({message: 'Post not found', data: posts});
    return res.status(200).send(posts); 
};

module.exports = { registerPost, listPost };

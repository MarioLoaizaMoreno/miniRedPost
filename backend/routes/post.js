const express = require("express");
const router = express.Router();
const Post = require("../controllers/post");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerPost", Post.registerPost);
router.get("/listPost", Auth, ValidateUser, Post.listPost);

module.exports = router;
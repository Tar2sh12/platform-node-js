import axios from "axios";
import User from "../../../DB/models/User.model.js";
import bcrypt from "bcryptjs";

export const addUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    const passwordd = password;
    bcrypt.hash(passwordd, salt, async function (err, hash) {
      const newUser = await User.create({
        username: username,
        email: email,
        password: hash,
      });
      res.json({ message: newUser });
    });
  });
};
export const checkUser = async (req, res, next) => {
  const { email, password } = req.body;
  const check = await User.findOne({
    where: {
      email: email,
    },
  });
  const enteredPassword = password;
  const storedHash = check.password;
  bcrypt.compare(enteredPassword, storedHash, function (err, result) {
    if (result) {
      res.json({ msg: "logged in successfully" });
    } else {
      res.json({ msg: "Password or email is incorrect" });
    }
  });
};

export const getAllUsers = async (req, res, next) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
};
export const logout= async (req, res, next) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
    where: {
      id: id,
    },
  });
  res.json({ msg: deletedUser });
}
// ====================== axios APIs ======================
export const createPost = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const callingCreatePostApi = await axios.post(
    "http://localhost:3004/post/createPost",
    {
      title: title,
      content: content,
      auther: id,
    }
  );
  if (callingCreatePostApi?.data?.message) {
    return res.json({
      postStat: "post created successfully",
      msg: callingCreatePostApi?.data?.message,
    });
  } else {
    return res.json({ msg: "cannot create post" });
  }
};

export const createCommentOnPost = async (req, res, next) => {
  const { id } = req.params;
  const { content, postId } = req.body;
  const callingCreateCommentApi = await axios.post(
    "http://localhost:3004/comment/createComment",
    {
      content: content,
      UserId: id,
      postId: postId,
    }
  );
  if (callingCreateCommentApi?.data?.message) {
    return res.json({
      postStat: "comment created successfully",
      msg: callingCreateCommentApi?.data?.message,
    });
  } else {
    return res.json({ msg: "cannot create comment" });
  }
};
export const deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPost = await axios.delete(
      `http://localhost:3004/post/deletePost/${id}`
    );
    if (deletedPost.data.msg) {
      return res.json({
        msg: "Post deleted successfully",
        Post: deletedPost.data.msg,
      });
    } else {
      return res.json({ msg: "Cannot delete post" });
    }
  } catch (error) {
    console.error("Error calling internal API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteComment = async (req, res, next) => {
  const { id } = req.params;
  const deletedComment = await axios.delete(
    `http://localhost:3004/comment/deleteComment/${id}`
  );
  if (deletedComment?.data?.msg) {
    return res.json({
      msg: "comment deleted successfully",
      Post: deletedComment?.data?.msg,
    });
  } else {
    return res.json({ msg: "cannot delete comment" });
  }
};

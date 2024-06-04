import Post from "../../../DB/models/Post.model.js";
import User from "../../../DB/models/User.model.js";
import comment from "../../../DB/models/comment.model.js";

export const createComment = async (req, res, next) => {
  const { content, UserId, postId } = req.body;
  const users = (await User.findAndCountAll({ where: { id: UserId } })).count;
  const posts = (await Post.findAndCountAll({ where: { id: postId } })).count;
  if (posts === 0 || users === 0) {
    return res.json({ msg: "no user or post by this id" });
  }
  const newComment = await comment.create({
    content: content,
    UserId: UserId,
    postId: postId,
  });
  res.json({ message: newComment });
};

export const getCommentsOfSpecificPostsOfSpecificUser = async (req,res,next) => {
  const { id } = req.params;
  const specificComment = await comment.findByPk(id);

  const getSpecificDetails = await User.findAll({
    include: [
      {
        model: Post,
        required: true,
        where: { auther: id },
        include: [{ model: comment, required: true, where: { UserId: id } }],
      },
    ],
    where: { id: id },
  });
  res.json({ msg: getSpecificDetails });
};

export const getAllComments = async (req, res, next) => {
  const AllComments = await comment.findAll();
  res.json(AllComments);
};

export const deleteComment = async (req, res, next) => {
  const { id } = req.params;
  const deletedComment = await comment.destroy({
    where: {
      id: id,
    },
  });
  res.json({ msg: deletedComment });
};

export const updateComment = async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  if (!content) {
    return res.json("you entered wrong fields to be updated");
  }
  const excludedColumns = ["createdAt", "updatedAt"];
  const specificComment = await comment.findByPk(id, {
    attributes: { exclude: excludedColumns },
  });
  specificComment["content"] = content;
  const updated = await specificComment.save();
  res.json({ msg: updated });
};

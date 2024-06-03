import Post from "../../../DB/models/Post.model.js";
import User from "../../../DB/models/User.model.js";
export const createPost = async (req, res, next) => {
  const { title, content, auther } = req.body;
  const newPost = await Post.create({
    title: title,
    content: content,
    auther: auther,
  });
  res.json({ message: newPost });
};

export const getPostsOfSpecificUser = async (req, res, next) => {
  const { id } = req.params;
  const getposts = await User.findAll({
    include: [{ model: Post, required: true, where: { auther: id } }],
    where: { id: id },
  });
  console.log(id);
  res.json({ msg: getposts });
};
export const getAllPosts = async (req, res, next) => {
  const allPosts = await Post.findAll();
  res.json(allPosts);
};

export const deletePost = async (req,res,next)=>{
    const { id } = req.params;
    const deletedPost = await Post.destroy({
        where: {
          id: id,
        },
      });
      res.json({msg:deletedPost})
}
export const updatePost = async (req,res,next)=>{
    const { id } = req.params;
    const data = req.body;
    const keys= Object.keys(data);
    const excludedColumns = ['createdAt', 'updatedAt'];
    const specificPost = await Post.findByPk(id, {
        attributes: { exclude: excludedColumns }
      });
    keys.forEach((e,i)=>{
        specificPost[e]=data[e]
    })
    const updated = await specificPost.save();
    res.json({msg:updated})
}
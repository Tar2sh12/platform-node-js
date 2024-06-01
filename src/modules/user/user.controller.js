import User from "../../../DB/models/User.model.js";
import bcrypt from "bcryptjs";

export const addUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    const passwordd = password;
    bcrypt.hash(passwordd, salt, async function (err, hash) {
      const newUser = await User.create({
        username: name,
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
      res.json({ msg: "Password is incorrect" });
    }
  });
};

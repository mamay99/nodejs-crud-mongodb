const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handlegetUserbyID(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found!" });
  return res.json(user);
}

async function handleupdateUserbyID(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "Last Name Succesfully Changed" });
}

async function handledeleteUserByID(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Id Successfully Deleted" });
}

async function handlecreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTtile
  ) {
    return res.status(400).json({ msg: "All fields are req,,,," });
  }
  //create user
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTile: body.jobTitle,
  });

  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
  handlegetUserbyID,
  handleGetAllUsers,
  handleupdateUserbyID,
  handledeleteUserByID,
  handlecreateNewUser,
};

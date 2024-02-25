import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Fetch all users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// add user
const addUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, city, state, pin } = req.body;
  const user = new User({
    firstName,
    lastName,
    city,
    state,
    pin,
  });

  const createdUser = await user.save();
  res.status(201).json(createdUser);
});

// @desc   Edit user
const editUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, city, state, pin } = req.body;
  const user = await User.findById(req.params.id);

  if (user) {
    user.firstName = firstName;
    user.lastName = lastName;
    user.city = city;
    user.state = state;
    user.pin = pin;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc   Delete user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.deleteOne();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { getUsers, addUser, editUser, deleteUser };

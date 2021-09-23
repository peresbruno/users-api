import user from "../models/user.js";

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const foundUser = await user.findById(id).exec();
    if (!foundUser) {
      return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    return res.json(foundUser);
  } catch (e) {
    res
      .status(500)
      .json({ message: `Failed to retrieve user with ID ${id}`, error: e });
  }
};

export const getUsers = async (_req, res) => {
  try {
    const users = await user.find().exec();
    return res.json(users);
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Failed to retrieve users", error: e });
  }
};

export const postUser = async (req, res) => {
  const newUserData = req.body;
  try {
    const newUser = new user(newUserData);
    await newUser.save();
    return res.json(newUser);
  } catch (e) {
    if (e.name === "ValidationError") {
      return res
        .status(400)
        .send({ message: "Invalid user properties", error: e });
    }

    return res.status(500).send({ message: "Failed to insert user", error: e });
  }
};

export const putUser = async (req, res) => {
  const id = req.params.id;
  const newUserData = req.body;
  try {
    const updatedUser = await user
      .findByIdAndUpdate(id, newUserData, {
        new: true,
      })
      .exec();

    if (!updatedUser) {
      return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    return res.json(updatedUser);
  } catch (e) {
    if (e.name === "ValidationError") {
      return res
        .status(400)
        .send({ message: "Invalid user properties", error: e });
    }

    return res
      .status(500)
      .json({ message: `Failed to update user with ID ${id}`, error: e });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await user.findByIdAndDelete(id).exec();
    return res.status(204).send();
  } catch (e) {
    return res
      .status(500)
      .json({ message: `Failed to delete user with ID ${id}`, error: e });
  }
};

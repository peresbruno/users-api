export const getUser = (req, res) => {
  const id = req.params.id;
  res.status(200).send({ message: `GET user with ID ${id}` });
};

export const getUsers = (_req, res) => {
  res.status(200).send({ message: `GET all users` });
};

export const postUser = (_req, res) => {
  res.status(201).send({ message: "POST an user" });
};

export const putUser = (req, res) => {
  const id = req.params.id;
  res.status(200).send({ message: `PUT user with ID ${id}` });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  res.status(204).send({ message: `DELETE user with ID ${id}` });
};

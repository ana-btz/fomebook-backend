export async function followUser(req, res) {
  try {
    res.send("followUser");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getAllUsers(req, res) {
  try {
    res.send("getAllUsers");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUserFollowers(req, res) {
  try {
    res.send("getUserFollowers");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUserFollowing(req, res) {
  try {
    res.send("getUserFollowing");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUserById(req, res) {
  try {
    res.send("getUserById");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

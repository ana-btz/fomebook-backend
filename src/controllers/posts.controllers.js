export async function createPost(req, res) {
  try {
    res.send("createPost");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

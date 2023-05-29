export async function signUp(req, res) {
  try {
    res.send("singUp");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function signIn(req, res) {
  try {
    res.send("singIn");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

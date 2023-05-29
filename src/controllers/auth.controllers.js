import bcrypt from "bcrypt";
import {
  createUser,
  getUserByEmail,
} from "../repositories/users.repository.js";
import { v4 as uuid } from "uuid";
import { createSession } from "../repositories/auth.repository.js";

export async function signUp(req, res) {
  const { name, email, photo, bio, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (user.rowCount !== 0)
      return res.status(409).send("E-mail já cadastrado");

    const hash = bcrypt.hashSync(password, 10);
    await createUser(name, email, photo, bio, hash);

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (user.rowCount === 0)
      return res.status(401).send({ message: "E-mail não cadastrado" });

    const isPasswordCorrect = bcrypt.compareSync(
      password,
      user.rows[0].password
    );
    if (!isPasswordCorrect)
      return res.status(401).send({ message: "Senha incorreta" });

    const token = uuid();
    await createSession(user.rows[0].id, token);
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

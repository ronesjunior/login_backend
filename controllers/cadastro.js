import { users } from "../db/db.js"; // importa o array de usuários

export const createUser = (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ error: "Nome e senha obrigatórios" });
  }

  if (users.find((u) => u.name === name)) {
    return res.status(400).json({ error: "Usuário já existe" });
  }

  users.push({ name, password });

  res.status(201).json({ message: "Usuário cadastrado" });
};

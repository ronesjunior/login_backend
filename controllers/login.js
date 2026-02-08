import { users, SECRET } from "../db/db.js"; // importa users e SECRET
import jwt from "jsonwebtoken";

export const loginUser = (req, res) => {
  const { name, password } = req.body; // O Express lê o JSON (name, password) enviado na requisição do body pelo frontend e cria um objeto chave-valor (name, password)
  // name = "joao"
  // password = "1234"

  // Procura o usuário no array 'users' que foi preenchido no frontend com a função 'register'
  const user = users.find((u) => u.name === name && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" }); // se o usuário não for encontrato o 'return' encerra a função e não passa para o próximo passo
  }

  // Gera o token JWT
  const token = jwt.sign({ name }, SECRET, { expiresIn: "1h" });

  res.json({ token }); // envia um JSON contendo o token para o frontend como objeto
  // no backend é um objeto, porém quando sai do backend indo para o frontend, vira JSON
  // ex JSON: {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
};

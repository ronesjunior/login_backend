import express from "express";
import cors from "cors";

// Importa os routers
import cadastroRouter from "./routes/cadastro.js";
import loginRouter from "./routes/login.js";

const app = express();

// Permite requisições de qualquer origem (frontend)
app.use(cors());

// Permite receber JSON no corpo das requisições
app.use(express.json());

// Rotas
app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);

// Rota coringa para rotas não encontradas
app.use(/.*/, (req, res) => {
  res.status(404).json({ message: "Endereço de rota não foi encontrado" });
});

const PORT = process.env.PORT || 3000; // Render usa process.env.PORT
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

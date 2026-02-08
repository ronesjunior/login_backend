import { Router } from "express";
import { createUser } from "../controllers/cadastro.js";

const router = Router();

// Rotas
// router.get("/", getUser);
// router.get("/:id", idUser);
router.post("/", createUser);
// router.delete("/:id", delUser);
// router.patch("/:id/me", updateMe);
// router.patch("/:id/me/avatar", updateAvatar);

export default router;

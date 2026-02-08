import { Router } from "express";
import { loginUser } from "../controllers/login.js";

const router = Router();

// Rotas
// router.get("/", getUser);
// router.get("/:id", idUser);
router.post("/", loginUser);
// router.delete("/:id", delUser);
// router.patch("/:id/me", updateMe);
// router.patch("/:id/me/avatar", updateAvatar);

export default router;

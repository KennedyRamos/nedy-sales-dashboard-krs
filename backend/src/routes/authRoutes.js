import { Router } from "express";
import bcrypt from "bcrypt";
import prisma from "../database/prisma.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(400).json({ error: "Email não encontrado" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ error: "Senha incorreta" });
    }

    return res.json({
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Erro ao fazer login" });
  }
});

export default router;
import bcrypt from "bcrypt"
import prisma from "../database/prisma.js"

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    })

    return res.status(201).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Erro ao criar usuário" })
  }
}

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany()
  return res.json(users)
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body

  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { name, email }
  })

  return res.json(user)
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  await prisma.user.delete({
    where: { id: Number(id) }
  })

  return res.json({ message: "Usuário removido com sucesso" })
}
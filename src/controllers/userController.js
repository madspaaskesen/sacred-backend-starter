const prisma = require('../../prisma/client')

async function updateUser(req, res) {
  const { name, email } = req.body
  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: { name, email }
    })
    res.json({ user: { id: user.id, name: user.name, email: user.email } })
  } catch (err) {
    res.status(500).json({ error: 'User update failed', detail: err.message })
  }
}

module.exports = { updateUser }

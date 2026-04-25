const userModel = require('../models/userModel');

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await userModel.findByCredentials(username, password);
    if (!user) return res.status(401).json({ error: 'Credenciales incorrectas' });

    res.json({
      id:        user.id,
      username:  user.username,
      role:      user.role,
      name:      user.name,
      roleLabel: user.role_label,
      email:     user.email,
      menu:      userModel.ROLE_MENUS[user.role] || [],
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { login };

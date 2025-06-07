const db = require('../models');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: ['user_id', 'user_name', 'email', 'name'],
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

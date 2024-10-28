const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
exports.registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const user = new User({ username, password, role });
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

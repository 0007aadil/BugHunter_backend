const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['bounty', 'hunter'], required: true },
  points: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const BountySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  solutions: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      content: String,
      rating: { type: Number, default: 0 },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bounty', BountySchema);

const Bounty = require('../models/Bounty');

// Post Bounty
exports.postBounty = async (req, res) => {
  const { title, description } = req.body;

  try {
    const bounty = new Bounty({
      title,
      description,
      user: req.user.id,
    });
    await bounty.save();
    res.status(201).json(bounty);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all Bounties
exports.getBounties = async (req, res) => {
  try {
    const bounties = await Bounty.find().populate('user', 'username');
    res.json(bounties);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

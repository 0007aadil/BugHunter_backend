// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const bountyRoutes = require('./routes/bountyRoutes');

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/bounties', bountyRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bountyRoutes = require('./routes/bountyRoutes');

dotenv.config(); // Load environment variables
connectDB(); // Connect to the database

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/bounties', bountyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

